import React, { Component } from 'react' ;
import CardComponent from './card.component';

class ListComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            listData: props.listInfo, 
            cards: [
                {id: 1, name: 'Hello 1', description: 'there is a board bitch1'},
                {id: 2, name: 'Hello 2', description: 'there is a board bitch2'},
                {id: 3, name: 'Hello 3', description: 'there is a board bitch3'},
                {id: 4, name: 'Hello 4', description: 'there is a board bitch4'},
                {id: 5, name: 'Hello 5', description: 'there is a board bitch5'},
                {id: 6, name: 'Hello 6', description: 'there is a board bitch6'}
            ]
        }
    }
    render(){

        const cardsInLIst = this.state.cards.map((card,i)=>{
            return(
                <CardComponent cardInfo = {card} key={i}/>
            );
        })
        
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.state.listData.name}</div>
                <div className="panel-body">
                    <div className="list-group">
                        {cardsInLIst}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListComponent