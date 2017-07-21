import axios from 'axios';

export function createBoard(data){
    return dispatch => {
        return axios.post('/api/board', data);
    }
}
