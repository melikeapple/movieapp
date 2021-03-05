import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";

export const actionTypes = {
  MovieTrailerRequest: "[Movie Api] Movie Trailer Request",
  MovieTrailerRequestSuccess: "[Movie Api] Movie Trailer Request Success",
  MovieTrailerRequestError: "[Movie Api] Movie Trailer Request Error",
  MovieTrailerResetStore: "[Movie Api] Movie Trailer Reset Store",
};

const initialState = {
  entity: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.MovieTrailerRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.MovieTrailerRequestSuccess:
      return {
        ...state,
        entity: payload,
        loading: false,
        error: null,
      };
    case actionTypes.MovieTrailerRequestError:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case actionTypes.MovieTrailerResetStore:
      return initialState;
    default:
      return state;
  }
};

export const actions = {
  movieTrailerRequest: (payload) => ({
    type: actionTypes.MovieTrailerRequest,
    payload,
  }),
  movieTrailerRequestSuccess: (payload) => ({
    type: actionTypes.MovieTrailerRequestSuccess,
    payload,
  }),
  movieTrailerRequestError: (payload) => ({
    type: actionTypes.MovieTrailerRequestError,
    payload,
  }),
  movieTrailerResetStore: () => ({
    type: actionTypes.MovieTrailerResetStore,
  }),
};

export function* saga() {
  yield takeLatest(
    actionTypes.MovieTrailerRequest,
    function* MovieTrailerSaga({ payload }) {
      try {
        const { response, error } = yield call(
          axios.get,
          `http://api.themoviedb.org/3/movie/${payload.id}?api_key=b0d65862c66030895d7983da2bd70edd&append_to_response=videos`
        );

        //yield delay(3000);

        if (error) {
          yield put(actions.movieTrailerRequestError(error));
          return;
        }

        yield put(actions.movieTrailerRequestSuccess(response));

        console.log("responsetrailer:", response);
      } catch (e) {
        console.log("Saga video Error:", e);
      }
    }
  );
}
