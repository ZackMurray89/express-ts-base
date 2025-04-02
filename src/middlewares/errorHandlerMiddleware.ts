import env from "../config/env";
import { HTTP } from "../constants/httpConstants";
import { ERROR } from "../constants/messageConstants";
import { AppError } from "../errors/AppError";
import { logger } from "../utils/logger";

import { NextFunction, Request, Response } from "express";

export default function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  let error = err;

  if (!(error instanceof AppError)) {
    error = new AppError(
      ERROR.INTERNAL_SERVER_ERROR,
      HTTP.INTERNAL_SERVER_ERROR,
    );
  }

  const statusCode =
    (error as AppError).statusCode || HTTP.INTERNAL_SERVER_ERROR;
  const message = (error as AppError).message || ERROR.INTERNAL_SERVER_ERROR;

  if ((error as AppError).isOperational) {
    logger.warn(`Operational Error: ${message} - ${req.method} ${req.url}`);
  } else {
    if (env.NODE_ENV === "development") {
      logger.error(
        `Unexpected Error: ${message} - ${req.method} ${req.url} - Stack: ${(error as AppError).stack}`,
      );
    } else {
      logger.error(`Unexpected Error: ${message} - ${req.method} ${req.url}`);
    }
  }

  res.status(statusCode).json({
    status: "Error",
    message,
    stack: env.NODE_ENV === "production" ? null : (error as AppError).stack,
  });
}
