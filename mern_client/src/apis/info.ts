import { Info } from "@/types/info";
import axios from "axios";

export const getInfos = () => {
  return axios.get<{ message: string; data: Info[] }>("/api/infos");
};

export const createInfo = (info: Info) => {
  return axios.post<Info, { message: string }>("/api/infos", info);
};
