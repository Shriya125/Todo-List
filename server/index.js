
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require("./routes/auth-router");
const connectDb = require("./utils/db");
const todoModel = require("./models/todo");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route 
app.use("/api/auth", authRoute);

// PORT
const PORT = 8000;

connectDb().then( () => {
    app.listen(PORT, () => {
        console.log(`Server is running at port : ${PORT}`);
    });
});