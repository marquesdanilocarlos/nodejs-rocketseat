import "express-async-errors";
import express from "express";
import AppError from "@/error/AppError";
import routes from "@/routes";

const app = express();

app.use(express.json());

/*@ts-ignore*/
app.use(AppError.errorHandler)

app.use(routes);

export default app;