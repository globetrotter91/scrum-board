import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Datetime from 'react-datetime' ;
import FormField from './../common/form.field'; 

class CardModifyComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            showModal: props.showModal, 
            cardInfo: props.cardInfo
        };
        this.close = this.close.bind(this) ;
    }

    close() {
        this.setState({ showModal: false });
        this.props.reloadCard()
    }

    open() {
        this.setState({ showModal: true });
    }

    render(){        
        return (
            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {this.state.cardInfo.cardName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea className='form-control' name='cardDesc' value={this.state.cardInfo.cardDesc}></textarea>
                </div>
                <div className='form-group'>
                    <label>Due Date</label>
                    <Datetime/>
                </div>
                <FormField 
                    label='Save' 
                    type='button'
                    btnClass='btn-primary'
                    />

                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
            </Modal>
        )
    }
}

export default CardModifyComponent

