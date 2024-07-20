import { useSetAtom } from "jotai";
import Map from "./common/Map";
import { mapAtom } from "@/atoms/map";
import { selectInfoAtom } from "@/atoms/info";

export default function MapContainer() {
  const setMap = useSetAtom(mapAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  const initMap = (map: naver.maps.Map) => {
    setMap(() => map);
    naver.maps.Event.addListener(map, "click", (e) => {
      setSelectInfo(() => null);
    });
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}
