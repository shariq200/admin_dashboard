import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";

import { testRouter } from "./route/test.js";
import { fileRouter } from "./route/file.js";
// require("dotenv").config;
const app = express();
app.use(express.json());

const corsOptions = {
  // origin:'https://abc.onrender.com',
  AccessControlAllowOrigin: "*",
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/test", testRouter);
app.use("/file", fileRouter);
const env_variables = env.config().parsed;
console.log("abc");
console.log("updated code");

mongoose.connect(
  "mongodb+srv://frontbacktesting:frontbacktesting@frontbacktesting.ucegmfe.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("server started at 3001"));
