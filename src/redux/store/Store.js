// store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers';
const middleware = [thunk];

const store = createStore(
  rootReducer, // Your combined reducers
  applyMiddleware(...middleware)
);

export default store;
