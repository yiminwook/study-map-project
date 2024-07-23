import { useAtom, useSetAtom } from "jotai";
import Block from "./common/Block";
import Button from "./common/Button";
import Divider from "./common/Divider";
import ShadowBox from "./common/ShadowBox";
import Span from "./common/Span";
import { GoPlus } from "react-icons/go";
import { FiArrowLeft } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { selectAtom } from "@/atoms/search";
import { useCallback, useState } from "react";
import Input from "./common/Input";
import { useInput } from "@/hooks/useInput";
import { infosAtom, selectInfoAtom } from "@/atoms/info";
import { useQuery } from "react-query";
import { searchKeyword } from "@/apis/search";

interface NavigationProps {
  type?: "home" | "upload";
}

export default function Navigation({ type = "home" }: NavigationProps) {
  const [select, setSelect] = useAtom(selectAtom);
  const { value, onChage } = useInput("");
  const setInfos = useSetAtom(infosAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);
  const [keyword, setKeyword] = useState("");

  useQuery({
    queryKey: ["search", keyword],
    queryFn: () => searchKeyword(keyword),
    select: (result) => result.data.data,
    onSuccess: (infos) => {
      setSelectInfo(() => null); //선택된 마커 초기화
      setInfos(() => infos);
    },
    enabled: !!keyword,
  });

  const onChangeSelect = useCallback(() => {
    setSelect((pre) => !pre);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select, setSelect]);

  const onSubmit = useCallback(() => {
    setKeyword(() => value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <ShadowBox>
      {type === "upload" && select ? (
        <Button onClick={onChangeSelect}>
          <FiArrowLeft size={20} />
        </Button>
      ) : (
        <Button type="link" url="/">
          <Span size="title">MERN</Span>
        </Button>
      )}
      <Divider />
      {select ? (
        <Input value={value} onChange={onChage} onSubmit={onSubmit} />
      ) : (
        <Block
          height="28px"
          onClick={type === "upload" ? onChangeSelect : undefined}
        />
      )}
      {type === "upload" ? (
        <Button onClick={select ? onSubmit : onChangeSelect}>
          <BiSearch size={20} />
        </Button>
      ) : (
        <Button type="link" url="/upload">
          <GoPlus size={20} />
        </Button>
      )}
    </ShadowBox>
  );
}
