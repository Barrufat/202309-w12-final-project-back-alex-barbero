import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import "dotenv/config";
import "./server/index.js";
import { connectToDatabase } from "./database/index.js";
import { Record } from "./features/records/model/Record.js";
import { recordsMock } from "./features/records/mocks/recordsMock.js";

let server: MongoMemoryServer;

const serverConnection = async () => {
  try {
    server = await MongoMemoryServer.create();
  } catch {
    server = await MongoMemoryServer.create();
  }
};

beforeAll(async () => {
  await serverConnection();

  const mongoUrl = server.getUri();
  await connectToDatabase(mongoUrl);

  await Record.create(recordsMock[0]);
  await Record.create(recordsMock[1]);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});
