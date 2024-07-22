import { NextFunction, Request, Response } from 'express';
import { Info } from '../types/info';
import indosService from '../services/indos.service';
import { HttpException } from '../middlewares/errorHandler';
import { HttpCode } from '../types/httpCode';

export default {
  createInfo: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const info: Info = req.body;
      const target = await indosService.getInfo(info.id);
      if (target) throw new HttpException(HttpCode.CONFLICT, '중복된 데이터');
      await indosService.createInfo(info);
      return res.status(HttpCode.OK).json({ message: 'success' });
    } catch (error) {
      next(error);
    }
  },
  getInfos: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await indosService.getInfos();
      return res.status(HttpCode.OK).json({
        message: 'success',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
};
