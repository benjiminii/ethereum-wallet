import express from "express";
import { createUser, findUser, createUserInfo } from "../models/User";

export const getUser = async (req: express.Request, res: express.Response) => {
  const { walletAddress } = req.query;
  try {
    const result = await findUser(walletAddress as string);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while getting the user" });
  }
};

export const postUser = async (req: express.Request, res: express.Response) => {
  const walletAddress = req.query.walletAddress;
  try {
    const user = await findUser(walletAddress as string);
    if (user) return res.status(201).json(true);
    const result = await createUser(walletAddress as string);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while saving the user" });
  }
};

export const postUserInfo = async (
  req: express.Request,
  res: express.Response
) => {
  const user = req.body;
  try {
    const result = await createUserInfo(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while saving the user" });
  }
};
