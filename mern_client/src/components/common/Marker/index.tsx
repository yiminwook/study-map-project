import { useEffect } from "react";
import "./Marker.css";

interface MarkerProps {
  map: naver.maps.Map;
  position: {
    lat: number;
    lng: number;
  };
  content: string;
  onClick?: () => void;
}

export default function Marker({
  map,
  position,
  content,
  onClick,
}: MarkerProps) {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;

    if (map) {
      marker = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(position),
        icon: {
          content,
        },
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, "click", () => {
        map.panTo(position); // 클릭시 지도이동
        onClick();
      });
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]);

  return null;
}
