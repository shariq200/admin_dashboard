import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String },
  age: { type: Number },
  phone: { type: String },
  access: { type: String },
});

export const TestModel = mongoose.model("testdata2", TestSchema);
