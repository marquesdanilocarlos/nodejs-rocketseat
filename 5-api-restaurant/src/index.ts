import express from 'express';
import routes from "@/routes";
import errorHandler from "@/middlewares/ErrorHandler";

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(routes);

// @ts-ignore
app.use(errorHandler);

app.listen(PORT, () => {});