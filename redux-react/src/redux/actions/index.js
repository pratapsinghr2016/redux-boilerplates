export function increaseAction(payload) {
  return {
    type: "INC",
    payload,
  };
}

export function decreaseAction(payload) {
  return {
    type: "DEC",
    payload,
  };
}

export function asyncAction(payload) {
  return {
    type: "ASYNC",
    payload,
  };
}
