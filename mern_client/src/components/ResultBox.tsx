import { Info } from "@/types/info";
import styled from "styled-components";
import Span from "./common/Span";
import React from "react";

interface ResultBoxProps {
  info: Info;
  onClick: (info: Info) => void;
}

const StyledResultBox = styled.div`
  padding: 16px 0;
  cursor: pointer;

  .place_name {
    margin-bottom: 6px;
  }

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default React.memo(function ResultBox({
  info,
  onClick,
}: ResultBoxProps) {
  return (
    <StyledResultBox onClick={() => onClick(info)}>
      <div className="place_name">
        <Span size="title">{info.placeName}</Span>
      </div>
      <div className="place_address">
        <Span size="small" color="gray">
          {info.addressName}
        </Span>
      </div>
    </StyledResultBox>
  );
});
