import React, { Component } from 'react';
import AddBoardComponent from './addboards.component';
import BoardListComponent from './board.list.component'; 

export default class ScrumComponent extends Component {
    render(){
        return(
            <div className='row'>

                <AddBoardComponent />
                <div className='col-md-12'>
                    <h3>You Scrum Boards</h3>
                    <BoardListComponent/>
                </div>
                
                
            </div>
        );
    }
}
