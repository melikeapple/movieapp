import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";

export const actionTypes = {
  TrendMovieRequest: "[Movie Api] Trend Movie Request",
  TrendMovieRequestSuccess: "[Movie Api] Trend Movie Request Success",
  TrendMovieRequestError: "[Movie Api] Trend Movie Request Error",
};

const initialState = {
  entity: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.TrendMovieRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.TrendMovieRequestSuccess:
      return {
        ...state,
        entity: payload,
        loading: false,
        error: null,
      };
    case actionTypes.TrendMovieRequestError:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const actions = {
  trendMovieRequest: () => ({
    type: actionTypes.TrendMovieRequest,
  }),
  trendMovieRequestSuccess: (payload) => ({
    type: actionTypes.TrendMovieRequestSuccess,
    payload,
  }),
  trendMovieRequestError: (payload) => ({
    type: actionTypes.TrendMovieRequestError,
    payload,
  }),
};

export function* saga() {
  yield takeLatest(actionTypes.TrendMovieRequest, function* TrendMovieSaga() {
    try {
      const { response, error } = yield call(
        axios.get,
        "https://api.themoviedb.org/3/trending/all/day?api_key=b0d65862c66030895d7983da2bd70edd"
      );
      yield delay(3000);
      if (error) {
        yield put(actions.trendMovieRequestError(error));
      }
      yield put(actions.trendMovieRequestSuccess(response));
      console.log("trendResponse:", response);
    } catch (e) {
      console.log("TrendMovieSagaError", e);
    }
  });
}
