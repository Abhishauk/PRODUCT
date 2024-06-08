import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 6001;

mongoose.connect('mongodb://127.0.0.1:27017/myapp-car');

const db = mongoose.connection;

db.once("error" , (error) => {
    console.log("mongoDB connection error:" , error);
});
db.once("open" , () => {
    console.log("MongoDB connected successfully");
});
db.on("disconnected" , () => {
    console.log("MongoDB disconnected");
})


app.get ("/" ,(req , res) => {
    res.send("hyyyy")
})

app.listen(port , () => {
    console.log("port connected");
})