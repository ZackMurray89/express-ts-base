import { logger } from "../utils/logger";

import { NextFunction, Request, Response } from "express";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.url === "/favicon.ico") {
    return next();
  }

  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info(
      `[${req.method}] ${req.originalUrl} - ${req.ip} ${req.statusCode} - ${duration}ms`,
    );
  });

  next();
};
