"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const errorHandler_1 = require("./middleware/errorHandler");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use(express_1.default.json());
app.use('/', userRoutes_1.default);
app.use(() => {
    throw (0, http_errors_1.default)(404, "route not found");
});
app.use(errorHandler_1.errorHandler);
mongoose_1.default.connect(config_1.DB)
    .then(() => {
    console.log('mongodb connected');
})
    .catch(() => {
    throw (0, http_errors_1.default)(501, 'unable to connect database');
});
app.listen(config_1.PORT, () => (`server running on port ${config_1.PORT}`));
