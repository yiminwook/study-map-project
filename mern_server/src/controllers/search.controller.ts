import { NextFunction, Request, Response } from 'express';
import searchService from '../services/search.service';

export default {
  searchKeyword: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await searchService.searchKeyword(req.query.keyword as string);
      return res.status(200).json({
        message: 'success',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
};
