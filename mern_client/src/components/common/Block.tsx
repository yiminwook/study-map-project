import { memo } from "react";
import styled from "styled-components";

interface Blockprops {
  height: string;
  onClick?: () => void;
}

const StyledBlock = styled.div<Blockprops>`
  width: 100%;
  height: ${(props) => props.height};
  cursor: ${(props) => props.onClick && "poiner"};
`;

function Block({ height, onClick }: Blockprops) {
  return <StyledBlock height={height} onClick={onClick} />;
}

export default memo(Block);
