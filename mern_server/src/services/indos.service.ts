import { HttpException } from '../middlewares/errorHandler';
import InfoModel from '../models/info';
import { HttpCode } from '../types/httpCode';
import { Info } from '../types/info';

export default {
  createInfo: async (info: Info) => {
    try {
      return InfoModel.create(info);
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'DB 서버 에러');
    }
  },
  getInfo: async (id: number) => {
    try {
      return InfoModel.findOne({ id });
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'DB 서버 에러');
    }
  },
  getInfos: async () => {
    try {
      return InfoModel.find({}, { _id: 0, __v: 0 }); // _id, __v 제외
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'DB 서버 에러');
    }
  },
};
