import task from "../../model/taskModel.js";
export default async function geyAllTasksController(req,res){
    try {
        const allTasks = await task.find({});
        if(allTasks.length === 0){
            return res.status(200).json({message: "No tasks found ,Try creating one !" , success : true});
        }

        return res.status(200).json({success : true, allTasks});
    } catch (error) {
        console.log(error);
    }
}
