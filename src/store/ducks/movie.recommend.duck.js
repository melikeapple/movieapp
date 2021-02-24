import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";

export const actionTypes = {
  RecommendedMovieRequest: "[Movie Api] Recommended Movie Request",
  RecommendedMovieRequestSuccess:
    "[Movie Api] Recommended Movie Request Success",
  RecommendedMovieRequestError: "[Movie Api] Recommended Movie Request Error",
  RecommendedMovieResetStore: "[Movie Api] Recommended Movie Reset Store",
};

const initialState = {
  entity: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.RecommendedMovieRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.RecommendedMovieRequestSuccess:
      return {
        ...state,
        entity: payload,
        loading: false,
        error: null,
      };
    case actionTypes.RecommendedMovieRequestError:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case actionTypes.RecommendedMovieResetStore:
      return initialState;

    default:
      return state;
  }
};

export const actions = {
  recommendedMovieRequest: (payload) => ({
    type: actionTypes.RecommendedMovieRequest,
    payload,
  }),
  recommendedMovieRequestSuccess: (payload) => ({
    type: actionTypes.RecommendedMovieRequestSuccess,
    payload,
  }),
  recommendedMovieRequestError: (payload) => ({
    type: actionTypes.RecommendedMovieRequestError,
    payload,
  }),
  recommendedMovieResetStore: () => ({
    type: actionTypes.RecommendedMovieResetStore,
  }),
};

export function* saga() {
  yield takeLatest(
    actionTypes.RecommendedMovieRequest,
    function* RecommendedMovieSaga({ payload }) {
      try {
        const { response, error } = yield call(
          axios.get,
          `https://api.themoviedb.org/3/movie/${payload}/recommendations?api_key=b0d65862c66030895d7983da2bd70edd&language=en-US&page=1`
        );

        if (error) {
          yield put(actions.recommendedMovieRequestError(error));
        }
        yield put(actions.recommendedMovieRequestSuccess(response));
        console.log("recommendedResponse:", response);
      } catch (e) {
        console.log("RecommendedMovieSagaError", e);
      }
    }
  );
}
