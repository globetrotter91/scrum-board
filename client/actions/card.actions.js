import axios from 'axios';


export function createCard(data){
    
    return dispatch => {
        return axios.post('/api/card', data);
    }
}


export function updateCard(id, data){
    return dispatch => {
        return axios.patch('/api/card/'+id, data)
    }
}