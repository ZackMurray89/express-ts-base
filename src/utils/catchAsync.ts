import { logger } from "./logger";

export const catchAsync = <T extends unknown[], R>(
  fn: (...args: T) => Promise<R>,
): ((...args: T) => Promise<R>) => {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      const err = error as Error;
      logger.error(`❌ Async Error ${err.message || err}`);
      throw error;
    }
  };
};
