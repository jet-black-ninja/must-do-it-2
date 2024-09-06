// @desc Get tasks
//@route GET /api/tasks
//@access Private
const getTasks = (req, res) => {
    res
    .status(200)
    .json({
        message:'get tasks'
    })
}
// @desc Create tasks
//@route POST /api/tasks
//@access Private
const postTask = (req,res) =>{
    res
    .status(200)
    .json({
        message:`create task`
    })
}
// @desc delete tasks
//@route DELETE /api/tasks/id
//@access Private
const deleteTask = (req,res) =>{
    res
    .status(200)
    .json({
        message: `delete task ${req.params.id}`
    })
}
// @desc update tasks
//@route PUT /api/tasks/id
//@access Private
const updateTask =(req,res) => {
    res
    .status(200)
    .json({
        message:`update task ${req.params.id}`
    })
}
module.exports = {
    getTasks,
    postTask,
    updateTask,
    deleteTask
}