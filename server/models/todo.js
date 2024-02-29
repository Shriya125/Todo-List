const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task : {
        type: String,
    },
    done : {
        type: Boolean,
        default: false,
    },
});

const todoModel = new mongoose.model("todoModel", todoSchema);

module.exports = todoModel;