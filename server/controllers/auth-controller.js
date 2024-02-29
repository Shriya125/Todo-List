const express = require("express");
const todoModel = require("../models/todo");


// Home page logic
const home = async(req, res) => {
    try {
        res.status(200).json({msg: "Welcome to home page"});
    } catch (error) {
        res
        .status(400)
        .json({msg:"Page not found"});
    }
};


// Add Task Logic
const add = async (req, res) => {
        const task = req.body.task;
        todoModel.create({
            task: task
        }).then(result => res.json(result))
        .catch(err => res.json(err));
};

const get = async (req, res) => {
        todoModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
};

const update = async (req, res) => {
    const {id} = req.params;
    // console.log(id);
    todoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err));
};

const deleteRecord = async (req, res) => {
    const {id} = req.params;
    todoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err));
}

module.exports = {add, get, home, update, deleteRecord};