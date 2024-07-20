import { Info } from "@/types/info";
import { useEffect, useState } from "react";
import "./InfoWindow.css";

interface InfoWindowProps {
  selectInfo: Info | null;
  map: naver.maps.Map;
  onSubmit?: () => void;
}

export default function InfoWindow({
  map,
  onSubmit,
  selectInfo,
}: InfoWindowProps) {
  const [infoWindow, setInfoWindow] = useState<naver.maps.InfoWindow | null>(
    null
  );

  useEffect(() => {
    //init
    const _infoWindow = new naver.maps.InfoWindow({
      content: "",
      backgroundColor: "transparent",
      borderWidth: 0,
      disableAnchor: true, //말풍선 꼬리
      pixelOffset: new naver.maps.Point(10, -20), //말풍선 위치
    });

    setInfoWindow(() => _infoWindow);

    return () => {
      _infoWindow?.setMap(null);
    };
  }, []);

  useEffect(() => {
    if (!infoWindow || !map) return;

    if (selectInfo) {
      infoWindow.setContent(InfoWindowMaker(selectInfo, onSubmit));
      infoWindow.open(map, selectInfo.position);
    } else {
      infoWindow.close();
    }
  }, [selectInfo]);

  return null;
}

function InfoWindowMaker(selectInfo: Info, onSubmit?: () => void) {
  const infoWindowBox = document.createElement("div");
  infoWindowBox.className = "infoBox";

  const infoWindowPlace = document.createElement("div");
  infoWindowPlace.className = "infoPlaceName";
  infoWindowPlace.innerHTML = `${selectInfo.placeName}`;
  infoWindowBox.appendChild(infoWindowPlace);

  const infowWindowAddress = document.createElement("div");
  infowWindowAddress.className = "infoAddressName";
  infowWindowAddress.innerHTML = `${selectInfo.addressName}`;
  infoWindowBox.appendChild(infowWindowAddress);

  if (onSubmit) {
    const infowWindowButton = document.createElement("div");
    infowWindowButton.className = "infoSubmit";
    infowWindowButton.innerHTML = "등록";
    infowWindowButton.onclick = onSubmit;
    infoWindowBox.appendChild(infowWindowButton);
  }

  return infoWindowBox;
}
