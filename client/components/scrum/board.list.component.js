import React, { Component } from 'react' ;
import { listBoards } from './../../data/api.service'; 
import { Link } from 'react-router-dom'; 

class BoardListComponent extends Component{
    constructor(){
        super();
        this.state = {
            boards: []
        }
        
    }

    componentDidMount(){
		console.log('componentDidMount: ');
		listBoards().then(
            res=>{
                
                this.setState({boards: res.data.boards}); 
            },
            err=>{
                this.props.history.push('/login'); 
            }
        ); 
	}
    

    render(){
        const boards = this.state.boards.map((board, i)=>{

            return (
                <tr key={i}>
                    <td><Link to={'/board/'+board._id} >{board.boardName}</Link></td>
                    <td>{board.boardType}</td>
                    <td>{board.dateCreated}</td>
                    <td>{board.noOfLists}</td>
                </tr>
            );
        });

        return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Board Name</th>
                    <th>Board Type</th>
                    <th>Date Created</th>
                    <th>Number Of Lists</th>
                </tr>
            </thead>
            <tbody>{boards}</tbody>
        </table>

        )
    }
}

export default BoardListComponent