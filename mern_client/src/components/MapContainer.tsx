import { selectInfoAtom } from "@/atoms/info";
import { mapAtom } from "@/atoms/map";
import { useSetAtom } from "jotai";
import Map from "./common/Map";

export default function MapContainer() {
  const setMap = useSetAtom(mapAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  const initMap = (newMap: naver.maps.Map) => {
    setMap(() => newMap);
    naver.maps.Event.addListener(newMap, "click", (e) => {
      setSelectInfo(() => null);
    });
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}
