import "express-async-errors";
import express from "express";
import router from "@/routes";
import AppError from "@/error/AppError";

const app = express();
app.use(express.json());

app.use(router);

app.use(AppError.errorHandler);

app.listen(3333, () => {
    console.log("Server started on port 3333!");
});

