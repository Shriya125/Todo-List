const mongoose = require("mongoose");

const URI = "mongodb+srv://shriyaaa:shriya125@cluster0.xhqoiyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("database connection successful");
    } catch (error) {
        console.log("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;