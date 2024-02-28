// AuthReducer.js
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      const token = localStorage.getItem("userId");
      return token ? { ...state, isauthenticate: true } : state;
    }
    case 'LOGOUT':
      localStorage.removeItem("userId");
      return { ...state, isauthenticate: false };
    default:
      return state;
  }
};
export default reducer;
  