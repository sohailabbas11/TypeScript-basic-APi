import { Router } from "express";
import { getUser, signUpUser, signInUser } from "../controllers/userControllers";
import { signInUserValidation, signUpUserValidation } from "../validation/userValidation";

const router = Router()
router.get('/', getUser)
router.post('/signup', signUpUserValidation, signUpUser)
router.post('/signIn', signInUserValidation, signInUser)

export default router;

