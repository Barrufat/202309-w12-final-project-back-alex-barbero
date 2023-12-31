import "dotenv/config";
import express from "express";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("root:server:app");
const app = express();
app.disable("x-powered-by");

export const startServer = (port: number) => {
  app.listen(port, () => {
    debug(chalk.green(`Serve listening on port http://localhost:${port}`));
  });
};

export default app;
