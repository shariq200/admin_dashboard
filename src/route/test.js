import express from "express";
import mongoose from "mongoose";
import { TestModel } from "../model/Test.js";

const router = express.Router();

//add data to table route
router.post("/adddata", async (req, res) => {
  const { id, name, email, age, phone, access } = req.body;

  console.log("i am in");
  const newData = new TestModel({
    id,
    name,
    email,
    age,
    phone,
    access,
  });
  await newData.save();

  res.json({ message: "User registered succesfully" });
  console.log("user successfully created");
});

//get all data route
router.get("/testdata", async (req, res) => {
  console.log("I am in");
  try {
    const response = await TestModel.find({});
    res.json(response);

    console.log("hello");
  } catch (err) {
    res.json(err);
  }
});

export { router as testRouter };
