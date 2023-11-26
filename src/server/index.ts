import "dotenv/config";
import express from "express";
import morgan from "morgan";
import app from "./app.js";

app.use(morgan("dev"));
app.use(express());
