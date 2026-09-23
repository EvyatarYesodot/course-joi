import express from "express";
import { createNewBook, deleteBook, getAllBooks, getBookByIsbn, updateBook } from "./controller.js";
import { validationMiddleware } from "../utils/validationMiddleware.js";
import { createBookSchema, deleteBookSchema, getAllSchema, getByIsbmSchema, updateBookSchema } from "./validations.js";

const router = express.Router();

router.get("/", validationMiddleware(getAllSchema), getAllBooks);
router.get("/:isbn", validationMiddleware(getByIsbmSchema), getBookByIsbn);
router.post("/", validationMiddleware(createBookSchema), createNewBook);
router.put("/:isbn", validationMiddleware(updateBookSchema), updateBook)
router.delete("/:isbn",validationMiddleware(deleteBookSchema), deleteBook)

export default router;
