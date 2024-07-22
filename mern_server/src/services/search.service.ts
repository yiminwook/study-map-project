import { HttpException } from '../middlewares/errorHandler';
import { HttpCode } from '../types/httpCode';
import axios from 'axios';
import { SearchResponse } from '../types/search';
import { Info } from '../types/info';
import { info } from 'console';

export default {
  searchKeyword: async (keyword: string) => {
    try {
      const searchParams = new URLSearchParams();
      searchParams.set('query', keyword);

      const result = await axios.get<SearchResponse>(
        `https://dapi.kakao.com/v2/local/search/keyword?${searchParams.toString()}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
          },
        }
      );

      const infos = result.data.documents.map<Info>((info) => ({
        id: Number(info.id),
        addressName: info.address_name,
        placeName: info.place_name,
        position: {
          lat: Number(info.y),
          lng: Number(info.x),
        },
      }));

      return infos;
    } catch (error) {
      console.log('error', error);
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, '서버 에러');
    }
  },
};
