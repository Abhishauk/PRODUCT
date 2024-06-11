import express from 'express';
import { Register , Login } from '../controllers/usercontroller.js'

const router = express.Router();
router.post('/userRegister' ,Register)
router.post('/Login' , Login)


export default router;