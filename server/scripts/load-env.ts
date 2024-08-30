import dotenv from "dotenv";
import path from "path";

export const loadEnv = (): void => {
  const envFile =
    process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev";
  const envPath = path.resolve(__dirname, "..", envFile);

  const result = dotenv.config({ path: envPath });

  if (result.error) {
    throw new Error(`Error loading .env file: ${result.error.message}`);
  }
};
