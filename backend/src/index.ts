import express, { Request, Response } from "express";
import path from "path";
import "dotenv/config";

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.listen(port, () => console.log("server is running"));
