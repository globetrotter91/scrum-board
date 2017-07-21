import React, { Component } from 'react' ;
import CardComponent from './card.component';
import { listCards } from './../../data/api.service'; 
import AddCardComponent from './add.card.component'; 


class ListComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            listData: props.listInfo, 
            addNewCard: false, 
            cards: []
        }
    }
    componentDidMount(){
		listCards(this.props.listInfo._id).then(
            res=>this.setState({cards: res.data.cards}),
            err=>this.setState({ errors: err.response.data.errors})
        ); 
    }
    
    reloadCards(e){
        
        this.setState({
            addNewCard: false
        })
        listCards(this.props.listInfo._id).then(
            res=>this.setState({cards: res.data.cards}),
            err=>this.setState({ errors: err.response.data.errors})
        );
    }

    addNewCard(e){
        e.preventDefault(); 
        this.setState({
            addNewCard: !this.state.addNewCard
        })
    }
    render(){

        const cardsInLIst = this.state.cards.map((card,i)=>{
            return(
                <CardComponent cardInfo={card} key={i}/>
            );
        })
        
        return (
            <div className="panel panel-default list-main">
                <div className="panel-heading">{this.state.listData.listName}</div>
                <div className="panel-body">
                    <div className="list-group cards-list">
                        {cardsInLIst}
                        {this.state.addNewCard &&  <AddCardComponent reloadCards={this.reloadCards.bind(this)} boardId={this.state.listData.boardId} listId={this.state.listData._id}/>}
                    </div>
                </div>
                <div className="panel-heading">
                    <a href="#" className='pull-right' onClick={this.addNewCard.bind(this)} >Add Card</a>
                </div>
            </div>
        )
    }
}

export default ListComponent