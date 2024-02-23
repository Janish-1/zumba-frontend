// actions/livesessionActions.js
import { FETCH_LIVE_SESSIONS_FAILURE,FETCH_LIVE_SESSIONS_SUCCESS,FETCH_LIVE_SESSIONS_REQUEST } from "../constant/ActionTypes";
  // Mock API call
  const apiUrl="http://13.201.135.248:8000/api/live_session_management/";
  const fetchLiveSessionsFromAPI = async () => {
    // Perform your API call here
    try {
      const response = await fetch(`${apiUrl}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch live sessions');
    }
  };
  
  // Action creator
  export const fetchLiveSessions = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_LIVE_SESSIONS_REQUEST });
  
      try {
        const liveSessions = await fetchLiveSessionsFromAPI();
        dispatch({ type: FETCH_LIVE_SESSIONS_SUCCESS, payload: liveSessions });
      } catch (error) {
        dispatch({ type: FETCH_LIVE_SESSIONS_FAILURE, payload: error.message });
      }
    };
  };
  