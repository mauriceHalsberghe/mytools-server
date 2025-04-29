import express from 'express';
import userController from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.get('/users', userController.getUsers);

export default userRouter;
