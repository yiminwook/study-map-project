import React from "react";
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

export default React.memo(function Block({ height, onClick }: Blockprops) {
  return <StyledBlock height={height} onClick={onClick} />;
});
