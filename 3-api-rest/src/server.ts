import express from 'express';

const PORT: number = 3333;
const app = express();

app.get("/", (request, response) => {
    response.send("Hello World Express!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));