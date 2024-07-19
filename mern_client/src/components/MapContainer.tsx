import { useSetAtom } from "jotai";
import Map from "./common/Map";
import { mapAtom } from "@/atoms/map";

export default function MapContainer() {
  const setMap = useSetAtom(mapAtom);

  const initMap = (map: naver.maps.Map) => {
    setMap(() => map);
    naver.maps.Event.addListener(map, "click", (e) => {
      console.log("맵 클릭");
    });
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}
