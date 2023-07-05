import express from 'express';
const router = express.Router();
import createTaskController from '../controller/task/createTaskController.js';
import deleteTaskController from '../controller/task/deleteTaskController.js';
import getAllTasksController from '../controller/task/getAllTasksController.js';
import updateTaskController from '../controller/task/updateTaskController.js';
import {requireSignIn,isAdmin} from '../middleware/authMiddleware.js';
// Method POST: Create task
router.post('/create-task', requireSignIn,createTaskController);

// Method GET: Get all tasks
router.get('/get-tasks',requireSignIn, getAllTasksController);

// Method DELETE: Delete task
router.delete('/delete-task/:id',requireSignIn,isAdmin, deleteTaskController);

// // Method PUT: Update task
router.put('/update-task/:id',requireSignIn,isAdmin, updateTaskController);

export default router;
