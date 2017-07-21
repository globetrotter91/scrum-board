import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardComponent extends Component{
    constructor(props){
        super(props);
        this.state=props.cardInfo ;
    }
    render(){        
        return (
            <Link to='/card-update' className="list-group-item m-b-20">
                    <h4 className="list-group-item-heading">{this.state.name}</h4>
                    <p className="list-group-item-text">
                        {this.state.description}
                    </p>
            </Link>
        )
    }
}

export default CardComponent