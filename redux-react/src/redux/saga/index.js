import { takeEvery, put } from "redux-saga/effects";

function* getUsers() {
  let response = yield fetch("https://reqres.in/api/users?page=2");
  response = yield response.json();
  yield put({ type: "SET", value: response });
}

export default function* rootSaga() {
  yield takeEvery("ASYNC", getUsers);
}
