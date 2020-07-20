import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initState = {};
const store = createStore(
  rootReducer,
  initState,
  compose(applyMiddleware(thunk))
);

export default store;
