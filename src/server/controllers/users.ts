import { Request, Response } from "express";
import { searchModel } from "../models/repositories";

export const searchController = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string;
    if (search) {
      const users = await searchModel(search);
      res.json({
        users
      });
    } else {
      res.json({
        error: 'parameter "search" is required and not empty'
      });
    }
  } catch (error) {
    throw error;
  }
};