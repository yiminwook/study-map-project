import { getInfos } from "@/apis/info";
import { infosAtom } from "@/atoms/info";
import MapContainer from "@/components/MapContainer";
import MarkersContainer from "@/components/MarkersContainer";
import Navigation from "@/components/Navigation";
import { useSetAtom } from "jotai";
import { useQuery } from "react-query";

export default function Home() {
  const setInfos = useSetAtom(infosAtom);

  const { status } = useQuery({
    queryKey: ["infos"],
    queryFn: getInfos,
    select: (result) => result.data.data,
    onSuccess: (infos) => setInfos(infos),
  });

  if (status === "loading") return null;

  return (
    <>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}
