import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  updatePublish,
  unPublish,
  getCategory
} from "../../actions/userAction";
import { formatDistance, subDays } from "date-fns";
import BorderExample from "../Spinner";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import moment from "moment";

function Cards() {
  const navigation = useNavigate()
  const [threads, setThreads] = useState([])
  
  const {
    getListUserResult,
    getListUserLoading,
    getListUserError,
    updatePublishResult,
    unPublishResult
  } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  useEffect(() => {
    if (updatePublish) {
      dispatch(getListUser());
    }
  }, [updatePublishResult, dispatch]);

  useEffect(() => {
    if (unPublish) {
      dispatch(getListUser());
    }
  }, [unPublishResult, dispatch]);

  useEffect(() => {
    if (getListUserResult) {
      setThreads(getListUserResult.data);
    }
  }, [getListUserResult]);

  const handleDetail= (id) =>{
    navigation(`/detail/${id}`)
  }
  console.log(threads);
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
            <h3 className="text-center mt-5 mb-3">Threads List</h3>
            {threads ? (
              threads.filter((e)=>e.isPublish===false).map((x) => {
                let createdAt = moment(x.createdAt).fromNow(true);
                return (
                  <>
                    <div className="col-lg-4 col-md-12 d-flex justify-content-center mt-3">
                            <Card
                              className="card rounded-08 shadow border-0 p-2"
                              style={{ height: "18rem", width: "18rem" }}
                            >
                              <Card.Body>
                                <Card.Title>
                                  <img
                                    style={{ height: "2rem", width: "2rem" }}
                                    src="../../images/user.png"
                                    alt=""
                                  />{" "}
                                  {x.author.username}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                  {createdAt} ago
                                </Card.Subtitle>
                                <Card.Text>
                                  <h5>{x.title}</h5>
                                </Card.Text>
                              </Card.Body>
                              <Button variant="success" onClick={()=>handleDetail(x._id)}>See Details</Button>
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

export default Cards;
