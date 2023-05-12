import express from "express";
import { FileModel } from "../model/File.js";

const router = express.Router();

//add data to table route
router.post("/adddata", async (req, res) => {
  const { userId, fileUrl, fileType, fileFolder, fileName } = req.body;

  console.log("i am in");
  const newData = new FileModel({
    userId,
    fileUrl,
    fileType,
    fileFolder,
    fileName,
  });
  await newData.save();

  res.json({ message: "User registered succesfully" });
  console.log("user successfully created");
});

router.get("/getdata/:userId", async (req, res) => {
  const userId = req.params.userId;
  const response = await FileModel.find({ userId });

  console.log("i am in");

  res.json({ message: "data fetched succesfully ", data: response });
});

router.delete("/deletedata/:id", async (req, res) => {
  const id = req.params.id;
  const response = await FileModel.deleteOne({ _id: id });

  console.log("i am in");

  res.json({ message: "data fetched succesfully ", data: response });
});

export { router as fileRouter };
