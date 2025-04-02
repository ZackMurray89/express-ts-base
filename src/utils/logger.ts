import env from "../config/env";

import morgan, { StreamOptions } from "morgan";
import path from "path";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logFormat = winston.format.combine(
  winston.format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level.toUpperCase()} ${message}`;
  }),
);

const transport = new DailyRotateFile({
  filename: path.join(__dirname, "../../logs/%DATE%.log"),
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

const logger = winston.createLogger({
  level: env.NODE_ENV === "production" ? "info" : "debug",
  format: logFormat,
  transports: [
    transport,
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
});

const stream: StreamOptions = {
  write: (message: string) => logger.info(message.trim()),
};

const morganFormat =
  ":method :url :status :response-time ms - :res[content-length]";

const morganMiddleware = morgan(morganFormat, {
  skip: (req) => req.url === "/favicon.ico",
  stream,
});

export { logger, morganMiddleware };
