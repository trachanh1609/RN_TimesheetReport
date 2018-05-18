import {
  FETCH_RECORD,
  FETCH_RECORD_SUCCESS,
  FETCH_RECORD_FAILURE
} from './actionTypes';
import {SERVER_URL} from '../const_var'

export function fetchRecordFromAPI(){
  return (dispatch) => {
    dispatch(fetchRecord());
    fetch( SERVER_URL + "/users/2/records" )
      .then(res => res.json())
      .then(json => dispatch(fetchRecordSuccess(json)))
      .catch(err => dispatch(fetchRecordFailure(err)));
  }
}

export function fetchRecord() {
  return {
    type: FETCH_RECORD
  }
}

export function fetchRecordSuccess(records) {
  return {
    type: FETCH_RECORD_SUCCESS,
    records
  }
}

export function fetchRecordFailure(err) {
  return {
    type: FETCH_RECORD_FAILURE,
    error: err
  }
}
