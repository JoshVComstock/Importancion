import { JwtPayload } from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    userid?: string | JwtPayload;
    user?: string | JwtPayload;
    rol?: string | JwtPayload;
  }
}
