import React, { Component } from 'react' ;
import ListsComponent from './lists.component';

class BoardComponent extends Component{
    constructor(){
        super();

        this.state = {
            boardName: 'New One Board'
        }
    }
    render(){
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <h2>{this.state.boardName}</h2>
                </div>
                <ListsComponent/>
            </div>
        )
    }
}

export default BoardComponent