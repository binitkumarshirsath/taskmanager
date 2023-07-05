import taskModel from '../../model/taskModel.js';

async function createTaskController(req,res){
    const {title,description,status,dueDate,assignedTo } = req.body;
    try {
        const task =  new taskModel({title,description,status , dueDate,assignedTo});
        await task.save();
        return res.status(200).json({success : true ,message : "Task created successfully",task});
    } catch (error) {
        console.log(error);
    }
}

export default createTaskController;
