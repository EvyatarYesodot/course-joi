import e from "express";
import { BookNotFoundError } from "../utils/error.js";
import { readBooksFromDB, writeBooksToDB } from "./repository.js";

export const loadBooks = async () => {
    return readBooksFromDB();
};

export const searchBookByIsbn = async (isbn) => {
    const allBooks = await readBooksFromDB();
    const findedbook = allBooks.find((book) => book.isbn === isbn);
    if (!findedbook) throw new BookNotFoundError(isbn);
    return findedbook;
};

export const createBookInDB = async (dataBook) => {
    const books = await readBooksFromDB();
    books.push(dataBook);
    await writeBooksToDB(books);
};

export const updateBookInDB = async (isbn, updateData) => {
    const allBooks = await readBooksFromDB();
    const bookIndex = allBooks.findIndex((book) => book.isbn === isbn);
    if (bookIndex === -1) throw new BookNotFoundError(isbn);

    allBooks[bookIndex] = {
        ...allBooks[bookIndex],
        ...updateData
    };
    await writeBooksToDB(allBooks);
    return allBooks[bookIndex];
};

export const deleteBookFromDB = async (isbn) => {
    const allBooks = await readBooksFromDB();
    const bookIndex = allBooks.findIndex((book) => book.isbn === isbn);
    if (bookIndex === -1) throw new BookNotFoundError(isbn);
    allBooks.splice(bookIndex, 1)
    await writeBooksToDB(allBooks);
};
