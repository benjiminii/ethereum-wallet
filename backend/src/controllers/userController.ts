import express from "express";
import { createUser } from "../models/User";

export const getUser = async (req: express.Request, res: express.Response) => {
  const user = req.body;
  try {
    // const result = await createUser(user);
    console.log("sda");
    // res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while saving the user" });
  }
};

export const postUser = async (req: express.Request, res: express.Response) => {
  const user = req.body;
  console.log(user);
  try {
    console.log("post");
    const result = await createUser(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while saving the user" });
  }
};
