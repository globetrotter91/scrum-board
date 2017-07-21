import express from 'express' ; 
import controller from './board.controller';
import { isAuthenticated } from './../services/auth.service'; 

let router = express.Router();

router.post('/', isAuthenticated, controller.create);
router.get('/', isAuthenticated, controller.getAll);

export default router ; 