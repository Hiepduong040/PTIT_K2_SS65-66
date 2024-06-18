import { combineReducers, createStore } from "redux";
import reducerProfile from "./reducers/ex01";
import reducerList from "./reducers/ex02";
import reducerFruit from "./reducers/ex03";
import reducerCount from "./reducers/ex04";
import reducerRandom from "./reducers/ex05";
import reducerText from "./reducers/ex06";
import reducerStatus from "./reducers/ex07";

const rootReducer = combineReducers({
  reducerProfile,
  reducerList,
  reducerFruit,
  reducerCount,
  reducerRandom,
  reducerText,
  reducerStatus,

});
const store = createStore(rootReducer);
export default store;