"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const userValidation_1 = require("../validation/userValidation");
const router = (0, express_1.Router)();
router.get('/', userControllers_1.getUser);
router.post('/', userValidation_1.getUserDataValidation, userControllers_1.getUserData);
exports.default = router;
