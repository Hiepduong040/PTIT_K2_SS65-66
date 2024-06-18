const initialState = "Rikkei Academy";

const reducerText = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return state === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy";
    default:
      return state;
  }
};

export default reducerText;