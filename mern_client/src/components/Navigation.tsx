import { useAtom } from "jotai";
import Block from "./common/Block";
import Button from "./common/Button";
import Divider from "./common/Divider";
import ShadowBox from "./common/ShadowBox";
import Span from "./common/Span";
import { GoPlus } from "react-icons/go";
import { FiArrowLeft } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { selectAtom } from "@/atoms/search";
import { useCallback } from "react";
import Input from "./common/Input";
import { useInput } from "@/hooks/useInput";

interface NavigationProps {
  type?: "home" | "upload";
}

export default function Navigation({ type = "home" }: NavigationProps) {
  const [select, setSelect] = useAtom(selectAtom);
  const { value, onChage } = useInput("");

  const onChangeSelect = useCallback(() => {
    setSelect((pre) => !pre);
  }, [select, setSelect]);

  const onSubmit = useCallback(() => {
    console.log(value);
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
