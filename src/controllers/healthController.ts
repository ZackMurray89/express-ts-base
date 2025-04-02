import { Request, Response } from "express";
import { healthService } from "../services/healthSerivce";
import { asyncHandler } from "../utils/asyncHandler";
import { HTTP } from "../constants/httpConstants";

export const healthController = {
  getHealth: asyncHandler(async (req: Request, res: Response) => {
    const healthStatus = await healthService.checkHealth();
    res.status(HTTP.OK).render("health", { health: healthStatus });
  }),
};
