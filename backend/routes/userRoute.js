import express from "express";
import { register } from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
import { logout } from "../controllers/userController.js";
import { getOtherUsers } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";


const router = express.Router();

router.route("/register").post(register);   
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAuthenticated, getOtherUsers);

export default router; 