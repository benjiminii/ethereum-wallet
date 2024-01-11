const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Session = require("express-session");

import useRoutes from "./routes/useRoutes";
import router from "./routes/useRoutes";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", useRoutes);

app.use(
  Session({
    name: "siwe-quickstart",
    secret: "siwe-quickstart-secret",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, sameSite: true },
  })
);
app.use(express.static(__dirname + "/public"));
app.use(router);

app.listen(process.env.PORT);
