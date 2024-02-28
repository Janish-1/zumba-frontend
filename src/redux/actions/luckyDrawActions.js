// actions/luckyDrawActions.js
import { FETCH_LUCKY_DRAWS_FAILURE,FETCH_LUCKY_DRAWS_REQUEST,FETCH_LUCKY_DRAWS_SUCCESS } from "../constant/ActionTypes";
// Mock API call
const apiUrl = "http://zumba.ramo.co.in/api/draw_dashboard-data/";

const fetchLuckyDrawsFromAPI = async () => {
    // Perform your API call here
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch lucky draws');
    }
};

// Action creators
export const fetchLuckyDraws = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_LUCKY_DRAWS_REQUEST });

        try {
            const luckyDraws = await fetchLuckyDrawsFromAPI();
            dispatch({ type: FETCH_LUCKY_DRAWS_SUCCESS, payload: luckyDraws });
        } catch (error) {
            dispatch({ type: FETCH_LUCKY_DRAWS_FAILURE, payload: error.message });
        }
    };
};
