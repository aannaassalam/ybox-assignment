import { FECTH_SUCCESS, FETCH_FAILURE, LOADING, UPLOAD_POST } from "./postType";

const initialState = {
  loading: false,
  posts: [],
  err: "",
  newPosts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case FECTH_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        err: "",
      };

    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        err: action.payload,
      };

    case UPLOAD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        newPosts: [action.payload, ...state.newPosts],
      };

    default:
      return state;
  }
};

export default postReducer;
