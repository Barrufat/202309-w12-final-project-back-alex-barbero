import { Types } from "mongoose";
import type { RecordStructure, RecordStructureWithIdMongoose } from "../types";

export const recordsMock: RecordStructureWithIdMongoose[] = [
  {
    _id: new Types.ObjectId("65627f915a1ecd043c5d123a"),
    bandName: "Ejtopa",
    albumName: "Fui alaorilla del rio y mi ketabah mu chola",
    frontCover: "front.png",
    backCover: "back.png",
    printImage: "print.png",
    cookieImage: "cookie.png",
    description: "Lo etopa son lo ma grande",
    trackList: "Uan, chu, zri",
  },
  {
    _id: new Types.ObjectId("65627f915a1ecd043c5d456a"),
    bandName: "Los chunguitos",
    albumName: "Dame veneno",
    frontCover: "front.png",
    backCover: "back.png",
    printImage: "print.png",
    cookieImage: "cookie.png",
    description: "Ke pum ke pam triki taun",
    trackList: "Uan, chu, zri",
  },
];

export const newRecordMock: RecordStructure = {
  bandName: "Kamela",
  albumName: "Sueñocontigowww",
  frontCover: "kemadadooun",
  backCover: "sinoteuviera",
  printImage: "conosidoo",
  cookieImage: "noo",
  description: "mubieraa",
  trackList: "namoradouuuuung",
};

export const modifiedRecordMock: RecordStructure = {
  bandName: "Ejtopa modificado",
  albumName: "modificado",
  frontCover: "front.png",
  backCover: "back.png",
  printImage: "print.png",
  cookieImage: "cookie.png",
  description: "Lo etopa son lo ma grande",
  trackList: "modificado",
};
