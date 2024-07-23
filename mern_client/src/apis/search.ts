import { Info } from "@/types/info";
import axios from "axios";

export const searchKeyword = (keyword: string) => {
  const searchParams = new URLSearchParams({ keyword }).toString();
  return axios.get<{ message: string; data: Info[] }>(
    `/api/search?${searchParams}`
  );
};
