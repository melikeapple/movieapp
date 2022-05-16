import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";

export const actionTypes = {
  UpComingMovieRequest: "[Movie Api] UpComing Movie Request",
  UpComingMovieRequestSuccess: "[Movie Api] UpComing Movie Request Success",
  UpComingMovieRequestError: "[Movie Api] UpComing Movie Request Error",
  UpComingMovieResetStore: "[Movie Api] UpComing Movie Reset Store",
};

const initialState = {
  entity: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.UpComingMovieRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.UpComingMovieRequestSuccess:
      return {
        ...state,
        entity: payload,
        loading: false,
        error: null,
      };
    case actionTypes.UpComingMovieRequestError:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case actionTypes.UpComingMovieResetStore:
      return initialState;

    default:
      return state;
  }
};

export const actions = {
  upComingMovieRequest: () => ({
    type: actionTypes.UpComingMovieRequest,
  }),
  upComingMovieRequestSuccess: (payload) => ({
    type: actionTypes.UpComingMovieRequestSuccess,
    payload,
  }),
  upComingMovieRequestError: (payload) => ({
    type: actionTypes.UpComingMovieRequestError,
    payload,
  }),
  upComingMovieResetStore: () => ({
    type: actionTypes.UpComingMovieResetStore,
  }),
};

export function* saga() {
  yield takeLatest(
    actionTypes.UpComingMovieRequest,
    function* UpComingMovieSaga() {
      try {
        const { response, error } = yield call(
          axios.get,
          "https://api.themoviedb.org/3/movie/upcoming?api_key=b0d65862c66030895d7983da2bd70edd&language=en-US&page=1"
        );

        yield delay(3000);

        if (error) {
          yield put(actions.upComingMovieRequestError(error));
        }
        yield put(actions.upComingMovieRequestSuccess(response));
        console.log("UpComingResponse:", response);
      } catch (e) {
        console.log("UpComingMovieSagaError", e);
      }
    }
  );
}
