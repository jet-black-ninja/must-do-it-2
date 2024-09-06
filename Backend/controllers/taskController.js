const asyncHandler = require('express-async-handler');
const Task = require("../models/taskModel");

//  @desc Get tasks
//  @route GET /api/tasks
//  @access Private
const getTasks = asyncHandler(async (req, res) => {
    const task = await Task.find();
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
    console.log(task);
    await task.deleteOne()
    res
    .status(200)
    .json({id:req.params.id});
    // try{
    //     await Task.findByIdAndDeleteOne(req.params.id);
    //     res
    //     .status(200)
    //    .json({ message:`Task deleted with id ${req.params.id}`});
    // }catch{
    //     throw new Error('Task not found')
    // }
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}