export class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    };
};

export class BookNotFoundError extends CustomError {
    constructor(isbn) {
        super(`book by isbn: '${isbn}' is not found`, 404);
    };
};
