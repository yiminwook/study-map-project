import { Info } from "@/types/info";
import { atom } from "jotai";

export const infosAtom = atom<Info[] | null>(null);
export const selectInfoAtom = atom<Info | null>(null);
