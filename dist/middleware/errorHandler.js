"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.log(err.message, err.statusCode);
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.statusCode || 500)
        .json({ message: err.message || "an unknown error" });
};
exports.errorHandler = errorHandler;
