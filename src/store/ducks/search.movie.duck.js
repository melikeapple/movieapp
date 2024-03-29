import { takeLatest, call, put, delay } from "redux-saga/effects";
import _ from "lodash";
import axios from "axios";

export const actionTypes = {
  SearchMovieRequest: "[Movie Api] Search Movie Request",
  SearchMovieRequestSuccess: "[Movie Api] Search Movie Request Success",
  SearchMovieRequestError: "[Movie Api] Search Movie Request Error",
  SearchMovieRequestResetStore: "[Movie Api] Search Movie Reset Store",
};

const initialState = {
  entity: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SearchMovieRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.SearchMovieRequestSuccess:
      return {
        ...state,
        entity: payload,
        loading: false,
        error: null,
      };
    case actionTypes.SearchMovieRequestError:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case actionTypes.SearchMovieRequestResetStore:
      return initialState;
    default:
      return state;
  }
};

export const actions = {
  searchMovieRequest: (payload) => ({
    type: actionTypes.SearchMovieRequest,
    payload,
  }),
  searchMovieRequestSuccess: (payload) => ({
    type: actionTypes.SearchMovieRequestSuccess,
    payload,
  }),
  searchMovieRequestError: (payload) => ({
    type: actionTypes.SearchMovieRequestError,
    payload,
  }),
  searchMovieResetStore: () => ({
    type: actionTypes.SearchMovieRequestResetStore,
  }),
};

export function* saga() {
  yield takeLatest(actionTypes.SearchMovieRequest, function* SearchMovieSaga({
    payload,
  }) {
    try {
      const { response, error } = yield call(
        axios.get,
        `https://api.themoviedb.org/3/search/multi?api_key=b0d65862c66030895d7983da2bd70edd&language=en-US&page=1&include_adult=false&query=${payload.inputValue}`
      );

      // yield delay(3000);

      if (error) {
        yield put(actions.searchMovieRequestError(error));
        payload.callback([]);
        return;
      }

      yield put(actions.searchMovieRequestSuccess(response));
      payload.callback(
        _.map(response.results, (entity) => ({
          id: entity.id,
          label: entity.original_title,
          value: _.kebabCase(entity.original_title),
        }))
      );
      console.log("response:", response);
    } catch (e) {
      console.log("Saga Error:", e);
      payload.callback([]);
    }
  });
}
