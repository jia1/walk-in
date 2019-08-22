import { combineReducers } from 'redux';
import interviews from './interviews';
import schedule from './schedule';

export default combineReducers({
  interviews,
  schedule
});
