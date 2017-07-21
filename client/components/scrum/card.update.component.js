import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { createHashHistory } from 'history'

const history = createHashHistory()

class CardUpdateComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            showModal: true
        };
        this.close = this.close.bind(this) ;
    }

    close() {
        this.setState({ showModal: false });
        this.props.history.push('/board')
    }

    open() {
        this.setState({ showModal: true });
    }

    render(){        
        return (
            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Text in a modal</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
            </Modal>
        )
    }
}

export default CardUpdateComponent

