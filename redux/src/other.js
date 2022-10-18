import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialState = {
  name: "alpha",
  value: 0,
};

const incReducer = function (state, action) {
  switch (action.type) {
    case "INC":
      return {
        ...initialState,
        value: state?.value + 1,
      };

    default:
      return initialState;
  }
};

const decReducer = function (state, { type, payload }) {
  switch (type) {
    case "DEC":
      return {
        ...initialState,
        value: state?.value - 1,
      };

    default:
      return initialState;
  }
};

const rootReducer = combineReducers({ incReducer, decReducer });

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { incReducer, decReducer },
});
// const store = createStore(rootReducer, initialState);

const increaseAction = function (payload) {
  return { type: "INC", payload };
};

const decreaseAction = function (payload) {
  return { type: "DEC", payload };
};

store.dispatch(increaseAction(1));
store.dispatch(increaseAction(1));
store.dispatch(decreaseAction(1));
store.dispatch(decreaseAction(1));

store.subscribe(() => {
  console.log("====>", store.getState());
});

export function doSomething() {
  return "";
}
