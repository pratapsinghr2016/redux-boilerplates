export function asyncReducer(state = { value: [] }, action) {
  switch (action.type) {
    case "ASYNC":
      return {
        ...state,
        // value: state.value - action.payload,
      };
    case "SET":
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
}
