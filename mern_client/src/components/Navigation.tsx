import Block from "./common/Block";
import Button from "./common/Button";
import Divider from "./common/Divider";
import ShadowBox from "./common/ShadowBox";
import Span from "./common/Span";
import { GoPlus } from "react-icons/go";

export default function Navigation() {
  return (
    <ShadowBox>
      <Button type="link" url="/">
        <Span size="title">MERN</Span>
      </Button>
      <Divider />
      <Block height="28px"></Block>
      <Button>
        <GoPlus size={20} />
      </Button>
    </ShadowBox>
  );
}
