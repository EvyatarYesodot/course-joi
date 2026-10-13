import { CustomError } from "./error.js";

export const validationMiddleware = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate({
            queryParam: req.query,
            pathParam: req.params,
            body: req.body
        });
        if (error) throw new CustomError(error.message, 400);

        for (const key in req.query) delete req.query[key];
        Object.assign(req.query, value.queryParam);
        for (const key in req.params) delete req.params[key];
        Object.assign(req.params, value.pathParam);
        req.body = value.body;

        next();
    }
};
