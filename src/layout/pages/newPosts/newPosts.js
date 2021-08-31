import React, { useState } from "react";
import "./newPosts.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/card";
import { Button, Modal, TextField } from "@material-ui/core";
import { upload } from "../../redux/post/postAction";

export default function NewPosts(props) {
  const newPosts = useSelector((state) => state.newPosts);

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const uploadPost = () => {
    const post = {
      title,
      body,
    };
    dispatch(upload(post));
    setTitle("");
    setBody("");
    setModal(false);
  };

  return (
    <div className="homepage">
      <div className="heading">
        <h2>New Posts</h2>
        <Button
          variant="outlined"
          color="secondary"
          className="newBtn"
          onClick={() => setModal(true)}
        >
          <i className="fas fa-plus"></i> new post
        </Button>
      </div>
      {newPosts.length > 0 ? (
        newPosts.map((post, index) => <Card post={post} key={index} />)
      ) : (
        <h3 className="noPostAvailable">No Posts Available</h3>
      )}
      {newPosts.length > 0 && (
        <div className="endOfPage">
          <p>End of Page</p>
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
