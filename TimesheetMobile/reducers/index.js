import {combineReducers} from 'redux';
import records from './recordReducer';

const rootReducer = combineReducers({
  records
});


export default rootReducer;
