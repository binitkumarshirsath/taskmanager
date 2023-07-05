import task from "../../model/taskModel.js";

export default async function deleteTaskController(req, res) {
  try {
    const taskId = req.params.id;
    const deletedTask = await task.findOneAndDelete({ _id: taskId });
    if (!deletedTask) {
      return res
        .status(200)
        .json({ message: "Task not found", success: false });
    }

    return res.status(200).json({ message: "Task deleted", success: true });
  } catch (error) {
    console.log(error);
  }
}
