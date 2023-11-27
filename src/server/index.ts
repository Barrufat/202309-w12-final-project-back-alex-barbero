import "dotenv/config";
import express from "express";
import morgan from "morgan";
import app from "./app.js";
import cors from "cors";

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
