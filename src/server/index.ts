import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import app from "./app.js";
import generalError, { notFoundError } from "./middleware/errorMiddleware.js";
import pingRouter from "../features/ping/router/PingRouter.js";
import recordRouter from "../features/records/router/RecordsRouter/recordRouter.js";

app.use(morgan("dev"));

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://alex-barbero-202309-bcn-front.netlify.app/",
      "http://localhost:4000",
    ],
  }),
);

app.use("/", pingRouter);

app.use("/records", recordRouter);

app.use(notFoundError);

app.use(generalError);
