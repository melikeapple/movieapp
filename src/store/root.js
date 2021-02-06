import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";

import * as app from "./ducks/app.duck";
import * as movie_search from "./ducks/search.movie.duck";
import * as popular_movies from "./ducks/popular.movie.duck";
import * as trend_movies from "./ducks/trend.movie.duck";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    movie_search: movie_search.reducer,
    popular_movies: popular_movies.reducer,
    trend_movies: trend_movies.reducer,
  });

export function* rootSaga() {
  yield all([
    fork(app.saga),
    fork(movie_search.saga),
    fork(popular_movies.saga),
    fork(trend_movies.saga),
  ]);
}
