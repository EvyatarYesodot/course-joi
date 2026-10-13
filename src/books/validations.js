import Joi from "joi";

const bookSchema = Joi.object({
    title: Joi.string().min(3).max(100),
    author: Joi.string().min(3).max(50),
    isbn: Joi.string().alphanum().length(13),
    publicationDate: Joi.date(),
    isAvailable: Joi.boolean(),
    tags: Joi.array().items(Joi.string().min(3).max(30))
});

// GET /
export const getAllSchema = Joi.object({
    queryParam: Joi.object({}),
    pathParam: Joi.object({}),
    body: Joi.object({})
});

//GET /:isbn
export const getByIsbmSchema = Joi.object({
    queryParam: Joi.object({}),
    pathParam: Joi.object({
        isbn: bookSchema.extract('isbn').required()
    }),
    body: Joi.object({})
});

//POST /
export const createBookSchema = Joi.object({
    queryParam: Joi.object({}),
    pathParam: Joi.object({}),
    body: bookSchema.presence("required")
});

//PUT /:isbn
export const updateBookSchema = Joi.object({
    queryParam: Joi.object({}),
    pathParam: Joi.object({
        isbn: bookSchema.extract('isbn').required()
    }),
    body: bookSchema.presence("optional").fork(['isbn'], (schema) => schema.forbidden())
});

//DELETE /:isbn
export const deleteBookSchema = Joi.object({
    queryParam: Joi.object({}),
    pathParam: Joi.object({
        isbn: bookSchema.extract('isbn').required()
    }),
    body: Joi.object({})
});
