import express from "express";
const router = express.Router();
import forgetpasswordController from "../controller/auth/forgetPasswordController.js";
import registerController from "../controller/auth/registerController.js";
import loginController from "../controller/auth/loginController.js";
import {requireSignIn,isAdmin} from "../middleware/authMiddleware.js";
import test from "../controller/auth/testController.js";
import protectedRoute from "../controller/auth/protectedRoute.js";


//Registration : Method POST
router.post("/register",registerController);

//Router Login : Method Post
router.post('/login', loginController);

//Dummy Route for testing purpose
router.post('/test',requireSignIn,isAdmin,test)

//Private Route
router.get('/user-dashboard',requireSignIn,protectedRoute)

//Protected Route
router.get('/admin-dashboard',requireSignIn,isAdmin,protectedRoute);

//Forget password : Method post
router.post('/forgetpassword',forgetpasswordController)

export default router;
