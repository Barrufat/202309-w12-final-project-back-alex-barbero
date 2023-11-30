import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import app from "./app.js";
import generalError, { notFoundError } from "./middleware/errorMiddleware.js";
import pingRouter from "../features/ping/router/PingRouter.js";
import recordRouter from "../features/records/router/RecordsRouter/recordRouter.js";

const frontProdUrl = process.env.ALLOWED_PROD_ORIGIN!;
const corsAllowedUrls = {
  origin: [frontProdUrl, "http://localhost:5173", "http://localhost:3000"],
};

app.use(morgan("dev"));

app.use(express.json());

app.use(cors(corsAllowedUrls));

app.use("/", pingRouter);

app.use("/records", recordRouter);

app.use(notFoundError);

app.use(generalError);
