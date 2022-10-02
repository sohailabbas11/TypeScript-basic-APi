"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = exports.getUser = void 0;
const userSchema_1 = __importDefault(require("../model/userSchema"));
const http_errors_1 = __importDefault(require("http-errors"));
const getUser = (req, res, next) => {
    res.json({ message: "hello" });
};
exports.getUser = getUser;
const getUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, id } = req.body;
        const user = yield userSchema_1.default.findOne({ name });
        if (user)
            return next((0, http_errors_1.default)(406, "user already exists"));
        const newuser = new userSchema_1.default({ name, id });
        yield newuser.save();
        res.json({ name, id });
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.getUserData = getUserData;
