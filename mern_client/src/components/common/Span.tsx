import React from "react";
import styled from "styled-components";

interface SpanProps {
  size?: "small" | "normal" | "title";
  children?: React.ReactNode;
  color?: string;
}

const StyledSpan = styled.span<SpanProps>`
  color: ${(props) => props.color || "black"};
  &.smaill {
    font-size: 0.8rem;
  }
  &.normal {
    font-size: 1rem;
  }
  &.title {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export default React.memo(function Span({
  size = "normal",
  color,
  children,
}: SpanProps) {
  return (
    <StyledSpan className={size} color={color}>
      {children}
    </StyledSpan>
  );
});
