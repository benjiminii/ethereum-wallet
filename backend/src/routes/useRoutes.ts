import express from "express";
import { postUser, getUser, postUserInfo } from "../controllers/userController";
import { Nonce, Verify } from "../controllers/authController";

const router = express.Router();

router.get("/user", getUser);
router.post("/user", postUser);
router.post("/user-info", postUserInfo);

router.get("/nonce", Nonce);
router.post("/verify", Verify);

export default router;
