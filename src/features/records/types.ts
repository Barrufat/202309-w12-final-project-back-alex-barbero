import { type Request } from "express";

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
  _id: string;
}

export type ByRecordId = Request<{
  recordId: string;
}>;

export interface DeleteRecordRequest {
  params: () => string;
}
