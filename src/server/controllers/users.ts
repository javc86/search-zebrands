import { Request, Response } from "express";
import { searchModel, IParameter } from "../models/users";

export const searchController = async (req: Request, res: Response) => {
  try {
    const q = req.query.q as string;
    const page = req.query.page as string;
    if (q) {
      const query: IParameter = {
        q
      }

      const regex = new RegExp(/^\d+$/);
      if (page && regex.test(page)) {
        query.page = parseInt(page);
      } else if (page) {
        res.status(400).json({
          error: 'parameter "page" must be only numbers'
        });
        return
      }

      const response = await searchModel(query);
      res.json({
        users: response.data
      });
    } else {
      res.status(400).json({
        error: 'parameter "q" is required and not empty'
      });
    }
  } catch (error) {
    // @ts-ignore
    if (error?.message) {
      // @ts-ignore
      res.status(error?.status || 400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Bad request' });
    }
  }
};