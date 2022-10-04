"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUserValidation = exports.signUpUserValidation = void 0;
const userSchema_1 = require("./userSchema");
const validator_1 = __importDefault(require("../utils/validator"));
const signUpUserValidation = (req, res, next) => (0, validator_1.default)(userSchema_1.userSchema.signUpUser, req.body, next);
exports.signUpUserValidation = signUpUserValidation;
const signInUserValidation = (req, res, next) => (0, validator_1.default)(userSchema_1.userSchema.signInUser, req.body, next);
exports.signInUserValidation = signInUserValidation;
