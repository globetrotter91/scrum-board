import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardModifyComponent from './card.modify.component'; 

class CardComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardInfo: props.cardInfo, 
            modifyingCard: false
        }
    }

    modifyCard(e){
        e.preventDefault();
        this.setState({
            modifyingCard: !this.state.modifyingCard
        })
    }

    reloadCard(){
        console.log('reload called'); 
        this.setState({
            modifyingCard: false
        })
    }

    render(){        
        return (
            <a href='#' onClick={this.modifyCard.bind(this)} className="list-group-item card-href">
                <div className='card-details'>
                    <h4 className="list-group-item-heading">{this.state.cardInfo.cardName}</h4>
                </div>
                {this.state.modifyingCard && <CardModifyComponent cardInfo={this.state.cardInfo} reloadCard={this.reloadCard.bind(this)} showModal={this.state.modifyingCard}/>}
            </a>
        )
    }
}

export default CardComponent