import "dotenv/config";
import debugCreator from "debug";
import chalk from "chalk";
import { startServer } from "./server/app.js";
import { connectToDatabase } from "./database/index.js";
import "./server/index.js";
import "./features/records/model/Record.js";

const debug = debugCreator("root");

const port = process.env.PORT ?? 4000;

if (!process.env.MONGODB_URL) {
  debug(chalk.red("Missing MongoDBconnection"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);
startServer(+port);
