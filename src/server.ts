import path from "node:path";

import express, { Application, Request, Response } from "express";

import env from "./config/env";

import corsMiddleware from "./middlewares/corsMiddleware";
import errorHandler from "./middlewares/errorHandlerMiddleware";
import { requestLogger } from "./middlewares/loggerMiddleware";
import securityMiddleware from "./middlewares/securityMiddleware";

import healthRoute from "./routes/healthRoute";

import { logger, morganMiddleware } from "./utils/logger";

import API_BASE_ROUTE from "./constants/apiConstants";
import { HTTP } from "./constants/httpConstants";

const app: Application = express();

const PORT = parseInt(env.PORT);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(securityMiddleware);
app.use(corsMiddleware);
app.use(express.json());
app.use(morganMiddleware);
app.use(requestLogger);

app.get(API_BASE_ROUTE, (_req: Request, res: Response) => {
  return res.status(HTTP.OK).send({
    message: "ExpressJS with TypeScript API Running",
  });
});

app.use(API_BASE_ROUTE, healthRoute);

app.get("/favicon.ico", (_req, res) => res.status(HTTP.NO_CONTENT).send());

app.use("*", (_req, res) => {
  return res.status(HTTP.NOT_FOUND).render("404");
});

app.use(errorHandler);

const server = app.listen(PORT, () => {
  logger.info(`Express Server Running On Port: ${PORT}`);
});

process.on("SIGINT", () => {
  logger.info("Shutting Down");
  server.close(() => {
    logger.info("Process Terminated");
  });
});
