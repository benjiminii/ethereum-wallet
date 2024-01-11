import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

import useRoutes from "./routes/useRoutes";

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 5555;

app.use(express.json());
app.use("/api", useRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
