import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface RootState {
  themeReducer: {
    isDarkMode: boolean;
  };
}

export default function Ex08() {
  const { isDarkMode } = useSelector((state: RootState) => state.themeReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Chế độ: {isDarkMode ? "tối" : "sáng"}</div>
      <button onClick={handleClick}>Đổi chế độ</button>
    </div>
  );
}