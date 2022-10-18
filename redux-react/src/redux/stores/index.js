import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../saga";
import createSagaMiddleware from "redux-saga";
// const rootReducer = function () {
//   console.log("hit");
// };

const reduxSagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: () => [reduxSagaMiddleware],
});

reduxSagaMiddleware.run(rootSaga);
export default store;
