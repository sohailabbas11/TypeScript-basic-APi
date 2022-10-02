import { Router } from "express";
import { getUser, getUserData } from "../controllers/userControllers";
import { getUserDataValidation } from "../validation/userValidation";

const router = Router()
router.get('/', getUser)
router.post('/', getUserDataValidation, getUserData)

export default router;

