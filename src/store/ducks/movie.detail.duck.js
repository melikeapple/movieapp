import { takeLatest, call, put, delay } from 'redux-saga/effects'
import axios from 'axios'

export const actionTypes = {
  MovieDetailRequest: '[Movie Api] Movie Detail Request',
  MovieDetailRequestSuccess: '[Movie Api] Movie Detail Request Success',
  MovieDetailRequestError: '[Movie Api] Movie Detail Request Error',
  MovieDetailRequestResetStore: '[Movie Api] Movie Detail Reset Store',
}

const initialState = {
  entity: null,
  loading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.MovieDetailRequest:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actionTypes.MovieDetailRequestSuccess:
      return {
        ...state,
        entity: payload,
        loading: false,
        error: null,
      }
    case actionTypes.MovieDetailRequestError:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case actionTypes.MovieDetailRequestResetStore:
      return initialState
    default:
      return state
  }
}

export const actions = {
  movieDetailRequest: (payload) => ({
    type: actionTypes.MovieDetailRequest,
    payload,
  }),
  movieDetailRequestSuccess: (payload) => ({
    type: actionTypes.MovieDetailRequestSuccess,
    payload,
  }),
  movieDetailRequestError: (payload) => ({
    type: actionTypes.MovieDetailRequestError,
    payload,
  }),
  movieDetailRequestResetStore: () => ({
    type: actionTypes.MovieDetailRequestResetStore,
  }),
}

export function* saga() {
  yield takeLatest(actionTypes.MovieDetailRequest, function* MovieDetailSaga({
    payload,
  }) {
    try {
      const { response, error } = yield call(
        axios.get,
        `https://api.themoviedb.org/3/movie/${payload.id}?api_key=b0d65862c66030895d7983da2bd70edd&language=en-US`,
      )

      // yield delay(3000);

      if (error) {
        yield put(actions.movieDetailRequestError(error))
        return
      }

      yield put(actions.movieDetailRequestSuccess(response))

      console.log('response:', response)
    } catch (e) {
      console.log('Saga Error:', e)
    }
  })
}
