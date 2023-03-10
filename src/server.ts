import "reflect-metadata";
import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";
import { errorHandler } from "./api/ErrorHandler";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);
server.use(errorHandler);

const port = process.env.PORT || 5555;

server.listen(port, () => console.log("running..."));