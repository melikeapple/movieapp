import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(app.saga)]);
}
