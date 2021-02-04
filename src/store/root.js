import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";

import * as app from "./ducks/app.duck";
import * as movie_search from "./ducks/search.movie.duck";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    movie_search: movie_search.reducer,
  });

export function* rootSaga() {
  yield all([fork(app.saga), fork(movie_search.saga)]);
}
