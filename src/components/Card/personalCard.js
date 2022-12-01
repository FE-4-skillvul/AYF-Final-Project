import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  updatePublish,
  unPublish,
  getCategory,
  deletePost,
} from "../../actions/userAction";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderExample from "../Spinner";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import moment from "moment";

function PersonalCard() {
  const navigation = useNavigate();
  const [threads, setThreads] = useState([]);
  const token = localStorage.getItem("TOKEN");
  const uname = localStorage.getItem("USERNAME");
  const {
    getListUserResult,
    getListUserLoading,
    getListUserError,
    deletePostResult
  } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  useEffect(() => {
    if (deletePost()) {
      dispatch(getListUser());
    }
  }, [deletePostResult, dispatch]);

  useEffect(() => {
    if (getListUserResult) {
      setThreads(getListUserResult.data);
    }
  }, [getListUserResult]);

  if (token === null) {
    window.location = "/404";
  }
  const handleDetail = (id) => {
    navigation(`/detail/${id}`);
  };


  return (
    <>
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container py-5">
          <div class="row d-flex justify-content-center">
            <h3 className="text-center mt-5 mb-3">{uname}'s Threads</h3>
            {threads ? (
              threads
                .filter(
                  (e) => e.isPublish === true && e.author.username === uname
                )
                .map((x) => {
                  let createdAt = moment(x.createdAt).fromNow(true);
                  return (
                    <>
                      <div className="col-lg-4 col-md-12 d-flex justify-content-center mt-3">
                        <Card
                          className="card rounded-08 shadow border-0 p-2"
                          style={{ height: "18rem", width: "18rem" }}
                        >
                          <Card.Body>
                            <div className="float-end">
                              <Button 
                              variant="danger"
                              onClick={() => dispatch(deletePost(x._id, x.author._id))} 
                              >
                                <DeleteForeverIcon />
                              </Button>
                            </div>
                            <Card.Title>{x.author.username} </Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">
                              {createdAt} ago
                            </Card.Subtitle>
                            <Button
                              id="cat"
                              className="btn-sm"
                              variant="success"
                            >
                              {x.category.category}
                            </Button>
                            <Card.Text>
                              <h5>{x.title}</h5>
                            </Card.Text>
                          </Card.Body>
                          <Button
                            variant="success"
                            onClick={() => handleDetail(x._id)}
                          >
                            See Details
                          </Button>
                        </Card>
                      </div>
                    </>
                  );
                })
            ) : getListUserLoading ? (
              //  <p>Loading....</p>
              <div className="container text-center justify-content-center mt-5">
                <BorderExample />
              </div>
            ) : (
              <p>{getListUserError ? getListUserError : "DATA KOSONG"}</p>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default PersonalCard;
