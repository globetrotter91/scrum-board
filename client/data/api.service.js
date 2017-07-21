import axios from 'axios'; 


export function listBoards(){
    return axios.get('/api/board'); 
}