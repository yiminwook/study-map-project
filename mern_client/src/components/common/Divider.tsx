import { memo } from "react";
import styled from "styled-components";

interface Dividerprops {
  width?: string;
  height?: string;
}

const StyledDivider = styled.div<Dividerprops>`
  width: ${(props) => (props.width ? props.width : "1px")};
  height: ${(props) => (props.height ? props.height : "20px")};
  opacity: 0.2;
  background-color: #707070;
  margin: 0 8px;
`;

function Divider({ width, height }: Dividerprops) {
  return <StyledDivider width={width} height={height} />;
}

export default memo(Divider);
