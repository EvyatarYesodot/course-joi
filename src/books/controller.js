import { createBookInDB, deleteBookFromDB, loadBooks, searchBookByIsbn, updateBookInDB } from "./service.js";

export const getAllBooks = async (req, res) => {
    const books = await loadBooks()
    res.send(books);
};

export const getBookByIsbn = async (req, res) => {
    const isbn = req.params.isbn;
    const book = await searchBookByIsbn(isbn);
    res.send(book);
};

export const createNewBook = async (req, res) => {
    const newBook = req.body;
    await createBookInDB(newBook);
    res.send(`Book '${newBook.isbn}' created successfully`);
};

export const updateBook = async (req, res) => {
    const isbn = req.params.isbn;
    const data = req.body;
    await updateBookInDB(isbn, data);
    res.send(`Book '${isbn}' updated successfully`);
};

export const deleteBook = async (req, res) => {
    const isbn = req.params.isbn;
    await deleteBookFromDB(isbn);
    res.send(`Book '${isbn}' deleted successfully`)
};
