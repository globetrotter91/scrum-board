import React, { Component } from 'react' ;
import ListComponent from './list.component';
import AddListComponent from './add.list.component';
import { listLists } from './../../data/api.service'; 
import { connect } from 'react-redux'; 

class ListsComponent extends Component{
    constructor(props){
        super(props);
        //console.log('in cons ', props); 
        this.state = {
            boardId: props.boardId,
            lists:[                 
            ]
        };
        //exit(); 
    }

    componentDidMount() {
        listLists(this.state.boardId).then(
            res=>{
                //this.setState({boardInfo: res.data.board}); 
                //this.props.setCurrentBoard(res.data.board);
                this.setState({
                    lists: res.data.lists
                })
            },
            err=>{
                this.props.history.push('/scrum'); 
            }
        ); 
    }

    render(){
        const listsInBoard = this.state.lists.map((list, i)=>{
            return(
                <div key={i} className='list-container'>
                    <ListComponent listInfo={list} />                    
                </div>
            );
        });
        return (
            <div className='b-main'>
                {listsInBoard}
                <div className='list-container'>
                    <AddListComponent />
                </div>
            </div>            
        )
    }
}
/*
ListsComponent.propTypes = {
    boardInfo: React.PropTypes.object.isRequired
}


function mapStateToProps(state){
    return {
        boardInfo : state.board.currentBoard
    }
}
*/
export default ListsComponent

//export default connect(mapStateToProps)(ListsComponent)