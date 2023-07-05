import task from "../../model/taskModel.js";
export default async function updateTaskController(req,res){
    try {
        const taskId = req.params.id;
        const { dueDate, status, assignedUser } = req.body;
    
        const updatedTask = await task.findByIdAndUpdate(
          taskId,
          { dueDate, status, assignedUser },
          { new: true }
        );
    
        if (!updatedTask) {
          return res.status(404).json({ message: 'Task not found' ,success : false });
        }
    
        return res.json({ message: 'Task updated successfully', task: updatedTask , success : true });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' , success : false });
      }
}