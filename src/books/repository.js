import fs from "fs/promises";
import path from "path";

const filePath = path.join(import.meta.dirname, "booksDB.json")

export const writeBooksToDB = async (data) => {
    const books = JSON.stringify(data);
    fs.writeFile(filePath, books, "utf8");
};

export const readBooksFromDB = async () => {
    let data = await fs.readFile(filePath, "utf8");
    if (!data) {
        data = "[]";
    }
    return JSON.parse(data);
};
