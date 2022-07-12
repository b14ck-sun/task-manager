const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send("All itemz")
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const getTask = (req, res) => {
    res.send("get item")
}

const deleteTask = (req, res) => {
    res.send("del item")
}

const updateTask = (req, res) => {
    res.send("up item")
}

module.exports = {
    getAllTasks, createTask, updateTask, getTask, deleteTask
}