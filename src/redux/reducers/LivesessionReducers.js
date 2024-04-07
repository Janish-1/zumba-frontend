// reducers/livesessionReducer.js
import { FETCH_LIVE_SESSIONS_REQUEST,FETCH_LIVE_SESSIONS_SUCCESS,FETCH_LIVE_SESSIONS_FAILURE } from "../constant/ActionTypes";

const initialState = {
    liveSessions: [],
    upcomingSessions: [],
    previousSessions: [],
    loading: false, 
    error: null
  };
// Reducer function
const livesessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LIVE_SESSIONS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_LIVE_SESSIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          upcomingSessions: action.payload.upcoming_sessions,
          previousSessions: action.payload.previous_sessions,
          liveSessions: action.payload.live_sessions
        };
      case FETCH_LIVE_SESSIONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };

export default livesessionReducer;
