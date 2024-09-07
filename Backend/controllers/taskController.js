const asyncHandler = require('express-async-handler');
const Task = require("../models/taskModel");
const User = require("../models/userModel");
//  @desc Get tasks
//  @route GET /api/tasks
//  @access Private
const getTasks = asyncHandler(async (req, res) => {
    const task = await Task.find({user:req.user.id});
    res
    .status(200)
    .json(task)
})
//  @desc Create tasks
//  @route POST /api/tasks
//  @access Private
const setTask = asyncHandler(async (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    const task = await Task.create({
        text: req.body.text,
        user:res.user.id,
    })
    res
    .status(200)
    .json(task)
})

// @desc update tasks
//@route PUT /api/tasks/id
//@access Private
const updateTask = asyncHandler(async (req,res) => {
    const task = await Task.findById(req.params.id)
    if(!task){
        res.status(400)
        throw new Error('Task not found')
    }
    const user = await User.findById(req.user.id);
    //check for user
    if(!user){
        res.status(401)
        throw new Error('User Not found');
    }
    //make sure the login in user matched task user
    if(task.user.toString() !== user.id){
        res.status(401)
        throw new Error('Not authorized, you can only update your own tasks')
    }
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res
    .status(200)
    .json(updatedTask)
})

// @desc delete tasks
//@route DELETE /api/tasks/id
//@access Private
const deleteTask = asyncHandler(async (req,res) =>{
    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(400)
        throw new Error('Task not found')
    }
    const user = await User.findById(req.user.id);
    //check for user
    if(!user){
        res.status(401)
        throw new Error('User Not found');
    }
    //make sure the login in user matched task user
    if(task.user.toString() !== user.id){
        res.status(401)
        throw new Error('Not authorized, you can only update your own tasks')
    }
    console.log(task);
    await task.deleteOne()
    res
    .status(200)
    .json({id:req.params.id});
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}