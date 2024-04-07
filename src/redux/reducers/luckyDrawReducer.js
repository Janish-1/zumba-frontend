// reducers/luckyDrawReducer.js
import { FETCH_LUCKY_DRAWS_REQUEST,FETCH_LUCKY_DRAWS_FAILURE,FETCH_LUCKY_DRAWS_SUCCESS } from "../constant/ActionTypes";
const initialState = {
    ongoingLuckyDraws: [],
    completedLuckyDraws: [],
    latest_winner_list:{},
    latest_draw_name:'',
    loading: false,
    error: null
};

const luckyDrawReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LUCKY_DRAWS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_LUCKY_DRAWS_SUCCESS:
            // Assume the action payload contains data for upcoming, ongoing, and completed lucky draws
            const {  previous_draws, upcoming_draws ,latest_winner_list,latest_draw_name} = action.payload;
            return {
                ...state,
                loading: false,
                ongoingLuckyDraws: upcoming_draws,
                completedLuckyDraws: previous_draws,
                latest_winner_list:latest_winner_list,
                latest_draw_name:latest_draw_name
            };
        case FETCH_LUCKY_DRAWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default luckyDrawReducer;
