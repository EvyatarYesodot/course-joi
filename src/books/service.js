import e from "express";
import { CustomError } from "../utils/error.js";
import { readBooksFromDB, writeBooksToDB } from "./repository.js";

export const loadBooks = async () => {
    return await readBooksFromDB();
};

export const searchBookByIsbn = async (isbn) => {
    const allBooks = await readBooksFromDB();
    const findedbook = allBooks.find((book) => book.isbn === isbn);
    if (!findedbook) throw new CustomError(`book by isbn: '${isbn}' is not found`, 404);
    return findedbook;
};

export const createBookInDB = async (dataBook) => {
    const books = await readBooksFromDB();
    books.push(dataBook);
    await writeBooksToDB(books);
    return;
};

export const updateBookInDB = async (isbn, updateData) => {
    const allBooks = await readBooksFromDB();
    const bookIndex = allBooks.findIndex((book) => book.isbn === isbn);
    if (bookIndex === -1) throw new CustomError(`book by isbn: '${isbn}' is not found`, 404);

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
    if (bookIndex === -1) throw new CustomError(`book by isbn: '${isbn}' is not found`, 404);
    allBooks.splice(bookIndex, 1)
    await writeBooksToDB(allBooks);
    return;
};
