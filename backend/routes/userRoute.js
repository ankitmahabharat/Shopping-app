import express from 'express';
import { forgotPassword, login, logout, register, reVerify, verify } from '../controller/userController.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';




const router = express.Router();


router.post('/register', register) 
router.post('/verify', verify) 
router.post('/reVerify', reVerify) 
router.post('/login', login) 
router.post('/logout', isAuthenticated, logout) 
router.post('/forgotPassword' , forgotPassword) 

export default router;