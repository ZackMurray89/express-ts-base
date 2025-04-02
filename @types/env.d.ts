declare namespace NodeJs {
  export interface ProcessEnv {
    NODE_ENV: "development" | "test" | "production";
    PORT: string;
  }
}
