import express from "express";
import { getUser, postUser } from "../controllers/userController";

const router = express.Router();

router.get("/user", getUser);
router.post("/user", postUser);

export default router;
