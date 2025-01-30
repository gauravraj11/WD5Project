const express = require('express');
const { loginUser, registerUser, getUserProfile } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post("/register",registerUser);    //localhost:9000/api/user/register

userRouter.post("/login",loginUser);         //localhost:9000/api/user/login

userRouter.get("/profile", getUserProfile); // localhost:9000/api/user/profile


module.exports = userRouter;