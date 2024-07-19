import React from "react";
import styled from "styled-components";

interface InputProps {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (e: any) => void;
  onSubmit?: () => void;
}

const StyledInput = styled.input<InputProps>`
  display: inline-block;
  border: none;
  width: 100%;
  min-height: 2em;
  font-size: 14px;
`;

export default React.memo(function Input({
  children,
  name,
  value,
  onChange,
  onSubmit,
}: InputProps) {
  const onEnterSubmit = (e: any) => {
    if (!onSubmit) return;
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <StyledInput
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onEnterSubmit}
    >
      {children}
    </StyledInput>
  );
});
