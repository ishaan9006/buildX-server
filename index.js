import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const port = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(port);