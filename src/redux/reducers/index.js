// reducers/index.js

import { combineReducers } from 'redux';
import livesessionReducer from './LivesessionReducers';
import blogCategoryReducer from './blogCategoryReducer';
import luckyDrawReducer from './luckyDrawReducer';

const rootReducer = combineReducers({
  livesession:livesessionReducer,
  category:blogCategoryReducer,
  luckydraw:luckyDrawReducer
});

export default rootReducer;
