import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileType: { type: String, required: true },
  fileFolder: { type: String, required: true },
  fileName: { type: String, required: true },
});

export const FileModel = mongoose.model("filedat", FileSchema);
