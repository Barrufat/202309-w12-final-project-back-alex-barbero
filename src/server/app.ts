import "dotenv/config";
import express from "express";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("root:server:app");
const app = express();

export const startServer = (port: number) => {
  app.listen(port, () => {
    debug(chalk.green(`Serve listening on port http://localhost:${port}`));
  });
};

export default app;
