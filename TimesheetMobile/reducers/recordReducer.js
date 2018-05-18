import {
  FETCH_RECORD,
  FETCH_RECORD_SUCCESS,
  FETCH_RECORD_FAILURE
} from '../actions/actionTypes';

const initialState = {
  records: [],
  isFetching: false,
  error: false
};

export default function recordReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECORD:
      // return Object.assign({}, state, {
      //   records: [],
      //   isFetching: true
      // })
      return {
        ...state,
        records: [],
        isFetching: true
      }
    case FETCH_RECORD_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        records: action.records,
        error: false
      })
    case FETCH_RECORD_FAILURE:
      console.warn('FETCH_RECORD_FAILURE')
      console.warn(action.error)
      return Object.assign({}, state, {
        isFetching: false,
        records: [],
        error: true
      })
    default:
      return state

  }
}
