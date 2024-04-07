// reducers/blogCategoryReducer.js
import { FETCH_BLOG_CATEGORIES_FAILURE,FETCH_BLOG_CATEGORIES_SUCCESS,FETCH_BLOG_CATEGORIES_REQUEST } from "../constant/ActionTypes";
import { FETCH_BLOG_FAILURE,FETCH_BLOG_REQUEST,FETCH_BLOG_SUCCESS } from "../constant/ActionTypes";
import { FETCH_ALL_BLOG_FAILURE,FETCH_ALL_BLOG_REQUEST,FETCH_ALL_BLOG_SUCCESS } from "../constant/ActionTypes";
const initialState = {
  categories: [],
  blogs:[],
  allBlogs:[],
  loading: false,
  error: null
};

const blogCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_BLOG_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload
      };
    case FETCH_BLOG_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      case FETCH_BLOG_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          blogs: action.payload
        };
      case FETCH_BLOG_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };  
        case FETCH_ALL_BLOG_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_ALL_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          allBlogs: action.payload.results
        };
      case FETCH_ALL_BLOG_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };  
    default:
      return state;
  }
};

export default blogCategoryReducer;
