import { useMemo, useState } from "react";

export type SeatState = "unoccupied" | "selected" | "occupied"; // union type

export interface Seat {
  id: string; // 고유 값
  name: string; // A1, H2
  state: SeatState; // unoccupied, selected, occupied
}

const mockSeats: Seat[] = [];

// 15개짜리 0부터 14의 배열 작성 -> 반복
Array.from(Array(15).keys()).forEach((index) => {
  // A0 A1 A2
  mockSeats.push({ id: `${index}`, name: `A${index}`, state: "unoccupied" });
});

mockSeats[1].state = "occupied";

function useSeats() {
  const [seats, setSeats] = useState<Seat[]>(mockSeats);
  const selectedSeat = useMemo(() => {
    // MDN array filter
    // 고차함수 map filter reducer
    return seats.filter((eachSeat) => eachSeat.state === "selected");
  }, [seats]);
  // state 작성 & onClickSeat 호출 시 처리
  // useEffect

  const onClickSeat = (clickedSeat: Seat) => {
    // 리팩토링
    setSeats((prev) => {
      return prev.map((eachSeat) =>
        eachSeat.id === clickedSeat.id
          ? {
              id: eachSeat.id,
              name: eachSeat.name,
              state: eachSeat.state === "selected" ? "unoccupied" : "selected",
            }
          : {
              id: eachSeat.id,
              name: eachSeat.name,
              state: eachSeat.state,
            }
      );
    });
  };

  return { seats, onClickSeat, selectedSeat };
}

export default useSeats;
