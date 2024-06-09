import express from 'express';
import {adminLogin} from '../controllers/admincontroller.js';

const router = express.Router();
router.post('/adminLogin', adminLogin);


export default router;