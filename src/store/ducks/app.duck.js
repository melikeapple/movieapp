import { takeLatest } from "redux-saga/effects";

export function* saga() {
  yield takeLatest("sdfsdf", function* AppProcess() {});
}
