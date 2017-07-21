import axios from 'axios';
import { SET_CURRENT_BOARD } from './../constants' ;

export function createBoard(data){
    return dispatch => {
        return axios.post('/api/board', data);
    }
}

export function setCurrentBoard(board){
    return {
        type: SET_CURRENT_BOARD, 
        board: board
    }
}
