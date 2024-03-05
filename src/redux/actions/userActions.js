import { FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS } from "../constant/ActionTypes";
const BASE_URL=process.env.REACT_APP_API_URL;

const fetchUserFromAPI = async (id) => {
    const url = `${BASE_URL}/api/users/${id}/`; // Adjust URL to include userId parameter
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch user details');
    }
};

export const fetchUser = (id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST });

        try {
            const user = await fetchUserFromAPI(id);
            dispatch({ type: FETCH_USER_SUCCESS, payload: user });
        } catch (error) {
            dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
        }
    };
};
