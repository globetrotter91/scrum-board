import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import CardModifyComponent from './card.modify.component'; 
import { DragSource } from 'react-dnd';
import moment from 'moment'; 

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
        const { isDropped, isDragging, connectDragSource } = this.props;
        return connectDragSource(
            <a href='#' onClick={this.modifyCard.bind(this)} className="list-group-item card-href">
                <div className='card-details'>
                    <h4 className="list-group-item-heading">{this.state.cardInfo.cardName}</h4>
                    <div className='card-foot'>
                        <span className='text-primary pull-right'> 
                        {this.state.cardInfo.dueDate && moment(this.state.cardInfo.dueDate).format('MMM D HH:mm')}
                        </span>
                    </div>
                </div>
                {this.state.modifyingCard && <CardModifyComponent cardInfo={this.state.cardInfo} reloadCard={this.reloadCard.bind(this)} showModal={this.state.modifyingCard}/>}
            </a>
        );
    }
}


const cardSource = {
  beginDrag(props) {
      //console.log('hithere', props.cardInfo.cardName)
    return {
      name: props.cardInfo.cardName,
    };
  },
    endDrag(props, monitor, component){
        console.log(monitor.getDropResult()); 
    }
};

function collect(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }  
}

CardComponent.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    isDropped: PropTypes.bool.isRequired,
};

export default DragSource('', cardSource, collect)(CardComponent);