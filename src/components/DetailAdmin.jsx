import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments, getListUser, addComment } from "../actions/userAction";
import moment from "moment";
function DetailAdmin() {
  const [threads, setThreads] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const date = Date.now()
  const { getListUserResult, getCommentsResult, addCommentsResult } = useSelector(
    (state) => state.UserReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch]);

  useEffect(() => {
    if (getListUserResult) {
      setThreads(getListUserResult.data);
    }
  }, [getListUserResult]);

  useEffect(() => {
    if (getCommentsResult) {
      setComments(getCommentsResult.data);
    }
  }, [getCommentsResult]);

  useEffect(() => {
    if (addCommentsResult) {
      dispatch(getComments(id))
      setComment('')
    }
  }, [addCommentsResult, dispatch]);

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addComment(
        {
        comment: comment,
        createdAt: date,
        },
      id
      )
    );
  };

  return (
    <div className="container py-5">
      {threads
        .filter((e) => e._id === id)
        .map((x) => {
          let createdAt = moment(x.createdAt).fromNow(true);
          return (
            <div>
              <div
                className="card card rounded-08 shadow border-0 p-2"
                id="detail"
              >
                <div className="card-header bg-transparent border-success">
                  <div className="user">
                    
                    <div className="user-meta">
                      <div className="name">{x.author.username}</div>
                      <div className="time">{createdAt} ago</div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-brand text-start">
                  <h3 className="card-title">{x.title}</h3>
                  <p className="card-text">{x.content}</p>
                  <i className="fa-solid fa-thumbs-up fa-1x"></i>
                </div>
                <div className="card-footer bg-transparent border-success">
                  <form
                    className="row g-3"
                    onSubmit={(e) => handleSubmit(e)}
                    id="form"
                  >
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        required
                        maxLength={30}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                      <label for="floatingTextarea">Comments</label>
                    </div>
                    <div className="col-auto">
                      <button
                        type="submit"
                        className="btn btn-success mb-3 btn-sm"
                      >
                        SEND
                      </button>
                    </div>
                  </form>
                  {comments.map((comment) => {
                    let commentCreated = moment(comment.createdAt).fromNow(
                      true
                    );
                    return (
                      <div class="card rounded-08 shadow border-0 mb-3 text-start">
                        <div className="card-header fs-6">
                          <div className="user">
                            
                            <div className="user-meta">
                              <div className="name">
                                {comment.user.username}
                              </div>
                              <div className="time">{commentCreated} ago</div>
                            </div>
                          </div>
                        </div>

                        <div class="card-body">
                          <p class="card-text">{comment.comment}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default DetailAdmin;
