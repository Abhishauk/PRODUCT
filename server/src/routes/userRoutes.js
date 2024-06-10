import express from 'express';
import { Register } from '../controllers/usercontroller.js'

const router = express.Router();
router.post('/userRegister' ,Register)


export default router;