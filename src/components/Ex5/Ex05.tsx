import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface RootState {
  randomReducer: {
    randomNumber: number;
  };
}

export default function Ex05() {
  const { randomNumber } = useSelector((state: RootState) => state.randomReducer);
  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch({ type: "GENERATE_RANDOM_NUMBER" });
  };

  return (
    <div>
      <h4>[{randomNumber}]</h4>
      <button onClick={handleRandom}>Lucky Number</button>
    </div>
  );
}