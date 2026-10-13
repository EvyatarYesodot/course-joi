import express from "express";
import booksRouter from "./books/route.js"

const app = express();
const port = 3000;
app.use(express.json());

app.use("/books", booksRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({ Error: err.message });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
