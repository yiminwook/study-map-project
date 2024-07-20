import { infosAtom, selectInfoAtom } from "@/atoms/info";
import { mapAtom } from "@/atoms/map";
import { useAtom, useAtomValue } from "jotai";
import Marker from "./common/Marker";

export default function MarkersContainer() {
  const map = useAtomValue(mapAtom);
  const infos = useAtomValue(infosAtom);
  const [selectInfo, setSelectInfo] = useAtom(selectInfoAtom);

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
    </>
  );
}
