export function incReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: action.payload + state.value,
      };

    default:
      return state;
  }
}

export function descReducer(state = { value: 10 }, action) {
  switch (action.type) {
    case "DEC":
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
}
