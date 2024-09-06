// @desc Get tasks
//@route GET /api/tasks
//@access Private
const asyncHandler = require('express-async-handler');
const getTasks = asyncHandler(async (req, res) => {
    if(!req.body.test){
        res.status(400)
        throw new Error('please add a text field')
    }
    res
    .status(200)
    .json({
        message:'get tasks'
    })
})
// @desc Create tasks
//@route POST /api/tasks
//@access Private
const postTask = asyncHandler(async (req,res) =>{
    res
    .status(200)
    .json({
        message:`create task`
    })
})
// @desc delete tasks
//@route DELETE /api/tasks/id
//@access Private
const deleteTask = asyncHandler(async (req,res) =>{
    res
    .status(200)
    .json({
        message: `delete task ${req.params.id}`
    })
})
// @desc update tasks
//@route PUT /api/tasks/id
//@access Private
const updateTask = asyncHandler(async (req,res) => {
    res
    .status(200)
    .json({
        message:`update task ${req.params.id}`
    })
})
module.exports = {
    getTasks,
    postTask,
    updateTask,
    deleteTask
}