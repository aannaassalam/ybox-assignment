import React, { useEffect, useState } from "react";
import "./homepage.css";
import { fetch_posts, upload } from "../../redux/post/postAction";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/card";
import { Button, Modal, TextField } from "@material-ui/core";
import Loader from "../../components/loader/loader";

export default function Homepage(props) {
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const err = useSelector((state) => state.err);

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(fetch_posts());
  }, [dispatch]);

  const uploadPost = () => {
    dispatch(
      upload({
        title,
        body,
      })
    );
    setTitle("");
    setBody("");
    setModal(false);
  };

  return (
    <div className="homepage">
      {loading ? (
        <Loader />
      ) : err ? (
        <p>Error occurred</p>
      ) : (
        <div>
          <div className="heading">
            <h2>All Posts</h2>
            <Button
              variant="outlined"
              color="secondary"
              className="newBtn"
              onClick={() => setModal(true)}
            >
              <i className="fas fa-plus"></i> new post
            </Button>
          </div>
          {posts.map((post, index) => (
            <Card post={post} key={index} />
          ))}
          <div className="endOfPage">
            <p>End of Page</p>
          </div>
        </div>
      )}

      <Modal open={modal} onClose={() => setModal(false)}>
        <div className="modal">
          <div className="head">
            <h4>Add New Post</h4>
            <i className="fas fa-times" onClick={() => setModal(false)}></i>
          </div>
          <div className="body">
            <TextField
              variant="outlined"
              label="Title"
              size="small"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
            <TextField
              variant="outlined"
              label="Body"
              size="small"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              multiline
              className="body-input"
              fullWidth
            />
          </div>
          <div className="footer">
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => setModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={uploadPost}
            >
              Post
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
