import "express-async-errors";
import express from "express";
import AppError from "@/error/AppError";

const app = express();
app.use(express.json());
/*@ts-ignore*/
app.use(AppError.errorHandler)


export default app;