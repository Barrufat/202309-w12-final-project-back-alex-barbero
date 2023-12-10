import { Schema, model } from "mongoose";
import { type RecordStructureWithId } from "../types";

const recordSchema = new Schema<RecordStructureWithId>({
  bandName: {
    type: String,
    required: true,
  },
  albumName: {
    type: String,
    required: true,
  },
  frontCover: {
    type: String,
    required: true,
  },
  backCover: {
    type: String,
    required: true,
  },
  printImage: {
    type: String,
    required: true,
  },
  cookieImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  trackList: {
    type: String,
    required: true,
  },
});

const Record = model("Record", recordSchema, "records");

export default Record;
