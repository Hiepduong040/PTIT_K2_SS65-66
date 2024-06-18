const initialCount: number = 0;
const reducerCount = (state = initialCount, action: any) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};
export default reducerCount;