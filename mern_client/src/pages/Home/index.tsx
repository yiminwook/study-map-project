import { infosAtom } from "@/atoms/info";
import MapContainer from "@/components/MapContainer";
import MarkersContainer from "@/components/MarkersContainer";
import Navigation from "@/components/Navigation";
import { infos } from "@/data/infos";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

export default function Home() {
  const setInfos = useSetAtom(infosAtom);

  useEffect(() => {
    if (infos) {
      setInfos(() => infos);
    }
  }, []);

  return (
    <>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}
