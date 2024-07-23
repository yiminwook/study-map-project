import { infosAtom, selectInfoAtom } from "@/atoms/info";
import { mapAtom } from "@/atoms/map";
import { useAtom, useAtomValue } from "jotai";
import Marker from "./common/Marker";
import InfoWindow from "./common/InfoWindow";
import { useCallback } from "react";
import { useMutation } from "react-query";
import { createInfo } from "@/apis/info";
import { AxiosError } from "axios";
import { HttpCode } from "@/types/httpCode";

interface MarkersContainerProps {
  type?: "home" | "upload";
}

export default function MarkersContainer({
  type = "home",
}: MarkersContainerProps) {
  const map = useAtomValue(mapAtom);
  const infos = useAtomValue(infosAtom);
  const [selectInfo, setSelectInfo] = useAtom(selectInfoAtom);

  const { mutate } = useMutation({
    mutationKey: ["postInfo"],
    mutationFn: createInfo,
    onSuccess: () => {
      alert("등록되었습니다.");
    },
    onError: (error: AxiosError) => {
      const errStatus = error.response?.status;
      if (errStatus === HttpCode.CONFLICT) {
        alert("이미 등록된 장소 입니다.");
      } else {
        alert("서버 에러");
      }
    },
  });

  const onSubmit = useCallback(() => {
    if (!selectInfo) return;
    mutate(selectInfo);
  }, [selectInfo, mutate]);

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
              map.panTo(info.position); // 클릭시 지도이동
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
