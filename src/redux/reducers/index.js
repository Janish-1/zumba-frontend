// reducers/index.js

import { combineReducers } from 'redux';
import livesessionReducer from './LivesessionReducers';
import blogCategoryReducer from './blogCategoryReducer';
import luckyDrawReducer from './luckyDrawReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  livesession:livesessionReducer,
  category:blogCategoryReducer,
  luckydraw:luckyDrawReducer,
  user:userReducer
});

export default rootReducer;
