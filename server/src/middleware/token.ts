import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "import2024hj";

interface RequestWithUser extends Request {
  userid?: string | JwtPayload;
  user?: string | JwtPayload;
  rol?: string | JwtPayload;
}

const verifyToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "No tiene los requisitos necesarios" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token ha expirado" });
      }
      return res.status(403).json({ message: "Token no válido" });
    }
    
    const decodedPayload = decoded as JwtPayload;
    req.userid = decodedPayload.userId;
    req.user = decodedPayload.user;
    req.rol = decodedPayload.rol;
    next();
  });
};

export default verifyToken;
