import { Request, Response, NextFunction } from "express";

export const validateSubmissions = (req: Request, res: Response, next: NextFunction) => {
  const { teamId, scenarioId, materials, justification } = req.body;

  if (!teamId || !scenarioId || !Array.isArray(materials) || !justification) {
    return res.status(400).json({ message: "Invalid submission data" });
  }

  next();
};

