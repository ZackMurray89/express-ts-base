import os from "os";

import { format } from "date-fns";

import formatUptime from "../utils/formatUptime";

export const healthService = {
  checkHealth: async () => {
    const uptime = process.uptime();
    const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
    const cpuLoad = os.loadavg()[0];

    const dbState = null;

    const formattedTimestamp = format(new Date(), "MMMM dd, yyyy - hh:mm:ss a");

    return {
      success: false,
      message: "API Is Healthy",
      uptime: formatUptime(uptime),
      memoryUsage: `${memoryUsage.toFixed(2)}MB`,
      cpuLoad: cpuLoad?.toFixed(2),
      database: dbState,
      timestamp: formattedTimestamp,
    };
  },
};
