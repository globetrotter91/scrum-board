import Promise from 'bluebird' ;
import Board from './board.model';
import isEmpty from 'lodash/isEmpty'; 

let controller = {} ; 

controller.create = (req, res) => {
    
    if(!isEmpty(req.body.boardName)){
        let board = new Board(req.body);
        board.user = req.user.id ;

        return board.saveAsync()
            .then(board=>{
                console.log(board); 
                return res.status(200).json({success: true, board: board[0]}); 
            })
            .catch(err=>{
                console.log(err); 
                return res.status(500).json({errors: {boardName: 'Some Problem Occured'}}) ;    
            })
    }else{
        return res.status(400).json({errors: {boardName: 'Board Name cannot be null'}}) ; 
    }
}

controller.getAll = (req, res) => {

    return Board.findAsync({user: req.user.id})
        .then(boards=>{
            return res.status(200).json({success: true, boards: boards});
        })
        .catch(err=>{
            console.log(err); 
            return res.status(500).json({errors: {boardName: 'Some Problem Occured'}}) ;    
        })
}



export default controller