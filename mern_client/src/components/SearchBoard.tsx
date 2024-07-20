import { infosAtom, selectInfoAtom } from "@/atoms/info";
import { selectAtom } from "@/atoms/search";
import { useAtom, useSetAtom } from "jotai";
import styled from "styled-components";
import ResultBox from "./ResultBox";
import { useCallback } from "react";
import { Info } from "@/types/info";

const StyledSearchBoard = styled.div`
  max-width: 436px;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #ffffff;
  top: 0px;
  padding: 74px 16px 16px 16px;

  .search_board_wrap {
    height: 100%;
    overflow-y: auto;
  }

  .no_result {
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default function SearchBoard() {
  const [infos] = useAtom(infosAtom);
  const [select, setSelect] = useAtom(selectAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  const onClickResultBox = useCallback(
    (info: Info) => {
      setSelectInfo(() => info);
      setSelect((pre) => !pre);
    },
    [setSelect, setSelectInfo]
  );

  if (!select) return null;
  return (
    <StyledSearchBoard>
      <div className="search_board_wrap">
        {infos && infos.length > 0 ? (
          infos?.map((info) => (
            <ResultBox key={info.id} info={info} onClick={onClickResultBox} />
          ))
        ) : (
          <div className="no_result">검색 결과가 없습니다.</div>
        )}
      </div>
    </StyledSearchBoard>
  );
}
