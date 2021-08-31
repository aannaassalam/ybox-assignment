import axios from "axios";
import { FECTH_SUCCESS, FETCH_FAILURE, LOADING, UPLOAD_POST } from "./postType";

export const fetching = () => ({
  type: LOADING,
});

export const fetch_success = (posts) => ({
  type: FECTH_SUCCESS,
  payload: posts,
});

export const fetch_failed = (err) => ({
  type: FETCH_FAILURE,
  payload: err,
});

export const upload = (post) => ({
  type: UPLOAD_POST,
  payload: post,
});

export const fetch_posts = () => (dispatch) => {
  dispatch(fetching());
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      dispatch(fetch_success(res.data));
    })
    .catch((err) => dispatch(fetch_failed(err)));
};
