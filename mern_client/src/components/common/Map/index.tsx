import { useEffect } from "react";

interface MapProps {
  width?: string;
  height?: string;
  initMap?: (map: naver.maps.Map) => void;
}

export default function Map({ width, height, initMap }: MapProps) {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    const newMap = new naver.maps.Map("map", mapOptions);
    initMap?.(newMap);
  }, []);

  return (
    <div id="map" style={{ width, height }}>
      Map
    </div>
  );
}
