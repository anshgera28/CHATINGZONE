import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { getMessage } from "../controllers/messageController.js";





const router = express.Router();

router.route("/send/:id").post(isAuthenticated, sendMessage);
router.route("/:id").get(isAuthenticated, getMessage);

export default router;
