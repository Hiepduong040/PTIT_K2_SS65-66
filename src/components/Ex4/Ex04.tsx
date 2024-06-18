import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface RootState {
  countReducer: {
    count: number;
  };
}

export default function Ex04() {
  const { count } = useSelector((state: RootState) => state.countReducer);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      Count: {count}
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button>
    </div>
  );
}