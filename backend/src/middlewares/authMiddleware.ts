import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

export interface UserPayload {
  id: string;
  iat: number;
  exp: number;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log(req.currentUser);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ error: "Not authenticated" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const payload: UserPayload = jwt.verify(token, process.env.JWT_SECRET);
    req.currentUser = payload;
    next();
  } catch (error) {
    res.status(401).send({ error: "Not authenticated" });
  }
};

module.exports = authMiddleware;
