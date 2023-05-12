import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";

import { testRouter } from "./route/test.js";
import { fileRouter } from "./route/file.js";
// require("dotenv").config;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/test", testRouter);
app.use("/file", fileRouter);
const env_variables = env.config().parsed;

mongoose.connect(env_variables.MONGO_URL);

app.listen(env_variables.PORT, () => console.log("server started at 3001"));
