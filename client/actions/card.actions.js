import axios from 'axios';


export function createCard(data){
    
    return dispatch => {
        return axios.post('/api/card', data);
    }
}