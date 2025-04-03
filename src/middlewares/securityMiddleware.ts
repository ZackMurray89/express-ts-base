import { NextFunction, Request, Response } from "express";

import rateLimit from "express-rate-limit";
import helmet from "helmet";

const securityHeaders = helmet();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minutes
  max: 100, // Limit Each IP To 100 Requests Per windowMs
  message: "Too Many Requests - Please Try Again Later",
});

export default function securityMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  securityHeaders(req, res, () => {
    limiter(req, res, next);
  });
}
