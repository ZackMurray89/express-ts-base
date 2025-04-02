import env from "../config/env";

import cors from "cors";

const corsOptions: cors.CorsOptions = {
  origin: env.NODE_ENV === "production" ? "https://domain" : "*",
  credentials: env.NODE_ENV === "production",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

export default cors(corsOptions);
