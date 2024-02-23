// actions/blogCategoryActions.js
import { FETCH_BLOG_CATEGORIES_FAILURE,FETCH_BLOG_CATEGORIES_REQUEST,FETCH_BLOG_CATEGORIES_SUCCESS } from "../constant/ActionTypes";
import { FETCH_BLOG_FAILURE,FETCH_BLOG_REQUEST,FETCH_BLOG_SUCCESS } from "../constant/ActionTypes";
import { FETCH_ALL_BLOG_REQUEST,FETCH_ALL_BLOG_SUCCESS,FETCH_ALL_BLOG_FAILURE } from "../constant/ActionTypes";
// Mock API call
const apiUrl = "http://13.201.135.248:8000/api/Catogory/";

const fetchBlogCategoriesFromAPI = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch blog categories');
  }
};

// Action creator
export const fetchBlogCategories = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_BLOG_CATEGORIES_REQUEST });

    try {
      const blogCategories = await fetchBlogCategoriesFromAPI();
      dispatch({ type: FETCH_BLOG_CATEGORIES_SUCCESS, payload: blogCategories });
    } catch (error) {
      dispatch({ type: FETCH_BLOG_CATEGORIES_FAILURE, payload: error.message });
    }
  };
};
// actions/blogCategoryActions.js

// Mock API call base URL

const baseUrl = "http://13.201.135.248:8000/api/Catogory/";

const BaseUrl = "http://13.201.135.248:8000/api/Blog-Catogory";
// Function to fetch a single blog category by ID from the API
const fetchBlogCategoryByIdFromAPI = async (id) => {
  try {
    const response = await fetch(`${BaseUrl}/${id}/`);
    const data = await response.json();
    return data.msg;
  } catch (error) {
    throw new Error('Failed to fetch blog category by ID');
  }
};

// Action creator to fetch a single blog category by ID
export const fetchBlogCategoryById = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_BLOG_REQUEST });

    try {
      const blogCategory = await fetchBlogCategoryByIdFromAPI(id);
      dispatch({ type: FETCH_BLOG_SUCCESS, payload: blogCategory });
    } catch (error) {
      dispatch({ type: FETCH_BLOG_FAILURE, payload: error.message });
    }
  };
};

const baseUrl1="http://13.201.135.248:8000/api/blog-list/";
const fetchAllBlogFromAPI = async () => {
  try {
    const response = await fetch(baseUrl1);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch blog categories');
  }
};
// Action creator to fetch a single blog category by ID
export const fetchAllBlog = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ALL_BLOG_REQUEST });

    try {
      const blogCategory = await fetchAllBlogFromAPI();
      dispatch({ type: FETCH_ALL_BLOG_SUCCESS, payload: blogCategory });
    } catch (error) {
      dispatch({ type: FETCH_ALL_BLOG_FAILURE, payload: error.message });
    }
  };
};
