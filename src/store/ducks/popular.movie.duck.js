import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";

export const actionTypes = {
  PopularMovieRequest: "[Movie Api] Popular Movie Request",
  PopularMovieRequestSuccess: "[Movie Api] Popular Movie Request Success",
  PopularMovieRequestError: "[Movie Api] Popular Movie Request Error",
};

const initialState = {
  entity: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.PopularMovieRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.PopularMovieRequestSuccess:
      return {
        ...state,
        entity: payload,
        loading: false,
        error: null,
      };
    case actionTypes.PopularMovieRequestError:
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
  popularMovieRequest: () => ({
    type: actionTypes.PopularMovieRequest,
  }),
  popularMovieRequestSuccess: (payload) => ({
    type: actionTypes.PopularMovieRequestSuccess,
    payload,
  }),
  popularMovieRequestError: (payload) => ({
    type: actionTypes.PopularMovieRequestError,
    payload,
  }),
};

export function* saga() {
  yield takeLatest(
    actionTypes.PopularMovieRequest,
    function* PopularMovieSaga() {
      try {
        const { response, error } = yield call(
          axios.get,
          "https://api.themoviedb.org/3/movie/popular?api_key=b0d65862c66030895d7983da2bd70edd&language=en-US&page=1"
        );

        yield delay(3000);

        if (error) {
          yield put(actions.popularMovieRequestError(error));
        }
        yield put(actions.popularMovieRequestSuccess(response));
        console.log("popularResponse:", response);
      } catch (e) {
        console.log("PopularMovieSagaError", e);
      }
    }
  );
}
