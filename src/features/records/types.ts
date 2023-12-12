import { type Request } from "express";
import { type Types } from "mongoose";

export interface RecordStructure {
  bandName: string;
  albumName: string;
  frontCover: string;
  backCover: string;
  printImage: string;
  cookieImage: string;
  description: string;
  trackList: string;
}

export interface RecordStructureWithId extends RecordStructure {
  id: string;
}

export interface RecordStructureWithIdMongoose extends RecordStructure {
  _id: Types.ObjectId;
}

export type ByRecordIdRequest = Request<{
  recordId: string;
}>;

export type DeleteRecordRequestParams = Request<{ recordId: string }>;

export type CreateRecordRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  RecordStructure
>;

export type ModifyRecordRequest = Request<
  { recordId: string },
  Record<string, unknown>,
  RecordStructure
>;
