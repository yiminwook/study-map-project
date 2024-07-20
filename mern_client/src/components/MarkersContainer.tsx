import { infosAtom, selectInfoAtom } from "@/atoms/info";
import { mapAtom } from "@/atoms/map";
import { useAtom, useAtomValue } from "jotai";
import Marker from "./common/Marker";
import InfoWindow from "./common/InfoWindow";
import { useCallback } from "react";

interface MarkersContainerProps {
  type?: "home" | "upload";
}

export default function MarkersContainer({
  type = "home",
}: MarkersContainerProps) {
  const map = useAtomValue(mapAtom);
  const infos = useAtomValue(infosAtom);
  const [selectInfo, setSelectInfo] = useAtom(selectInfoAtom);

  const onSubmit = useCallback(() => {
    console.log("submit");
  }, []);

  if (!map || !infos) return null;

  return (
    <>
      {infos.map((info) => {
        return (
          <Marker
            key={info.id}
            map={map}
            position={info.position}
            content={"<div class='marker' />"}
            onClick={() => {
              setSelectInfo(() => info);
            }}
          />
        );
      })}
      {selectInfo && (
        <Marker
          key={selectInfo.id}
          map={map}
          position={selectInfo.position}
          content="<div class='marker select' />"
          onClick={() => setSelectInfo(() => null)}
        />
      )}
      <InfoWindow
        selectInfo={selectInfo}
        map={map}
        onSubmit={type === "upload" ? onSubmit : undefined}
      />
    </>
  );
}
