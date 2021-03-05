import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";

export const actionTypes = {
  MoviePhotosRequest: "[Movie Api] Movie Photos Request",
  MoviePhotosRequestSuccess: "[Movie Api] Movie Photos Request Success",
  MoviePhotosRequestError: "[Movie Api] Movie Photos Request Error",
  MoviePhotosResetStore: "[Movie Api] Movie Photos Reset Store",
};

const initialState = {
  entity: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.MoviePhotosRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.MoviePhotosRequestSuccess:
      return {
        ...state,
        entity: payload,
        loading: false,
        error: null,
      };
    case actionTypes.MoviePhotosRequestError:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case actionTypes.MoviePhotosResetStore:
      return initialState;
    default:
      return state;
  }
};

export const actions = {
  moviePhotosRequest: (payload) => ({
    type: actionTypes.MoviePhotosRequest,
    payload,
  }),
  moviePhotosRequestSuccess: (payload) => ({
    type: actionTypes.MoviePhotosRequestSuccess,
    payload,
  }),
  moviePhotosRequestError: (payload) => ({
    type: actionTypes.MoviePhotosRequestError,
    payload,
  }),
  moviePhotosResetStore: () => ({
    type: actionTypes.MoviePhotosResetStore,
  }),
};

export function* saga() {
  yield takeLatest(
    actionTypes.MoviePhotosRequest,
    function* MoviePhotosSaga({ payload }) {
      try {
        const { response, error } = yield call(
          axios.get,
          `https://api.themoviedb.org/3/movie/${payload.id}/images?api_key=b0d65862c66030895d7983da2bd70edd`
        );

        //yield delay(3000);

        if (error) {
          yield put(actions.moviePhotosRequestError(error));
          return;
        }

        yield put(actions.moviePhotosRequestSuccess(response));

        console.log("responsetrailer:", response);
      } catch (e) {
        console.log("Saga video Error:", e);
      }
    }
  );
}
