import {combineReducers} from 'redux';
import users from './profile';
import comments from './comment'

const allReducers = combineReducers({
  users: users,
  comments: comments
});

export default allReducers;
