import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
  onClick: (e: any) => void;
  type?: "link" | "button";
  url?: string;
}

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Button({ children, onClick, type = "button", url }: ButtonProps) {
  const RealButton = <StyledButton onClick={onClick}>{children}</StyledButton>;

  const RealLink = (
    <StyledButton onClick={() => {}}>
      <Link to={url!}>{children}</Link>
    </StyledButton>
  );

  return type === "link" && url ? RealLink : RealButton;
}

export default memo(Button);
