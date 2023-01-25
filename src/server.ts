import "reflect-metadata";
import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const server = express();
server.use(express.json());

server.use(router);

server.listen(process.env.SERVER_PORT, () => console.log("running..."));