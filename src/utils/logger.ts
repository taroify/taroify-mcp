export const logService = {
  info: (message: string): void => {
    console.log(`[INFO] ${message}`);
  },

  warn: (message: string): void => {
    console.warn(`[WARN] ${message}`);
  },

  error: (message: string): void => {
    console.error(`[ERROR] ${message}`);
  },

  debug: (message: string): void => {
    if (process.env.DEBUG) {
      console.debug(`[DEBUG] ${message}`);
    }
  },
};
