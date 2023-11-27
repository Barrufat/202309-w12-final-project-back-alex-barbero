import type { Request, Response, NextFunction } from "express";
import type CustomError from "../CustomError/CustomError";
import chalk from "chalk";
import debugCreator from "debug";

const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error.privateMessage) {
    const debug = debugCreator(`${error.nameSpace ?? "root:errorMiddleWare"}`);
    debug(chalk.red(`error: ${error.privateMessage}`));
  }

  const statusCode = error.statusCode ?? 500;
  res.status(statusCode).json(error.message);
};

export default generalError;
