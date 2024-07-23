import { infosAtom, selectInfoAtom } from "@/atoms/info";
import MapContainer from "@/components/MapContainer";
import MarkersContainer from "@/components/MarkersContainer";
import Navigation from "@/components/Navigation";
import SearchBoard from "@/components/SearchBoard";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

export default function Upload() {
  const setInfos = useSetAtom(infosAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  useEffect(() => {
    // 초기화
    setInfos(() => null);
    setSelectInfo(() => null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navigation type="upload" />
      <MapContainer />
      <MarkersContainer type="upload" />
      <SearchBoard />
    </>
  );
}
