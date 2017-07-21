import React, { Component } from 'react' ;
import ListComponent from './list.component';

class ListsComponent extends Component{
    constructor(){
        super();
        this.state={
            lists:[
                {id: 1, name: 'Back Log', created: 'abc'}, 
                {id: 2, name: 'To Be Done', created: 'abc2'}, 
                {id: 3, name: 'Doing', created: 'abc2'}, 
                {id: 5, name: 'Done', created: 'abc5'}, 
            ]
        };
    }
    render(){
        const listsInBoard = this.state.lists.map((list, i)=>{
            return(
                <div key={i} className='col-md-3 col-sm-4 col-xs-12'>
                    <ListComponent listInfo={list} />                    
                </div>
            );
        });

        return (
            <div className='row'>
                <div className='col-md-12 lists-container'>
                    {listsInBoard}
                </div>                
            </div>
        )
    }
}

export default ListsComponent