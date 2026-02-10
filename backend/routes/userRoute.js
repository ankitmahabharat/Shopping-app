import express from 'express';
import { register } from '../controller/userController.js';
// import { verify } from 'jsonwebtoken';
import pkg from "jsonwebtoken";
const { verify } = pkg;


const router = express.Router();


router.post('/register', register) 
router.post('/verify', verify) 

export default router;