import { Schema, model } from "mongoose";
import { type RecordStructure } from "../types";

const recordSchema = new Schema<RecordStructure>({
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
  trackList: {
    type: String,
    required: true,
  },
});

export const Record = model("Record", recordSchema, "records");
