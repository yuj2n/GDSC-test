// 요규사항
// 1. 좌석 렌더링
// 1-1. 좌석 상태
// 2. 좌석 선택
// 2-2. 좌석 선택 결과
// 3. 영화 선택
// 4. 좌석 수와 영화값
// 5. 결제 화면

import useSeats, { SeatState } from "../hooks/useSeats";
import styled, { css } from "styled-components";

function Booking() {
  // 구조 분해 할당
  // 대수적 효과
  const { seats, onClickSeat, selectedSeat } = useSeats();
  console.log(seats);

  return (
    <div>
      {seats.map((eachSeat) => (
        <StyledSeatButton
          state={eachSeat.state}
          key={eachSeat.id}
          onClick={() => onClickSeat(eachSeat)}
          disabled={eachSeat.state === "occupied"}
        >
          {eachSeat.name}
        </StyledSeatButton>
      ))}
      <h1>{selectedSeat.length}개 선택했어요</h1>
    </div>
  );
}

export default Booking;

const StyledSeatButton = styled.button<{ state: SeatState }>`
  ${({ state }) => state === "unoccupied" && unoccupiedStyle}
  ${({ state }) => state === "selected" && selectedStyle}
  ${({ state }) => state === "occupied" && occupiedStyle}
`;

const unoccupiedStyle = css`
  background-color: green;
`;

const selectedStyle = css`
  background-color: blue;
`;

const occupiedStyle = css`
  background-color: red;
`;
