const number: number = 0;
const reducerRandom = (state = number, action: any) => {
  switch (action.type) {
    case "GENERATE_RANDOM_NUMBER":
      return Math.random();
    default:
      return state;
  }
};
export default reducerRandom;