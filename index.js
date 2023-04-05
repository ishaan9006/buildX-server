import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import User from "./model/User.js";
import Project from "./model/Project.js";
import * as dotenv from 'dotenv';
dotenv.config();

const password = process.env.REACT_APP_PASSWORD;
const username = process.env.REACT_APP_USERNAME;

const port = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/data', async(req, res) => {
    console.log(req.body);
    const { info } = req.body;
    const user = new User(info);
    await user.save();
    res.send(user);
});

app.post('/demo', async(req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
});


mongoose.connect('mongodb+srv://'+username+':'+password+'@cluster0.npspj77.mongodb.net/?retryWrites=true&w=majority').then((res) => {
// mongoose.connect('mongodb+srv://ishaan96:qNusgJcVx0m5Kn21@cluster0.npspj77.mongodb.net/?retryWrites=true&w=majority').then((res) => {
    console.log('Connected to database!');
}).then((err) => {
    console.log(err);
});


app.listen(port, () => {
    console.log(`Server started and running at ${port}`);
});
