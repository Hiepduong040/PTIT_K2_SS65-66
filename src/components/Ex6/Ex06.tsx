import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface RootState {
  textReducer: {
    text: string;
  };
}

export default function Ex06() {
  const { text } = useSelector((state: RootState) => state.textReducer);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: "CHANGE_TEXT" });
  };

  return (
    <div>
      <h4>{text}</h4>
      <button onClick={handleChange}>Change State</button>
    </div>
  );
}