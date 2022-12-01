import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getListUser,
  updatePublish,
  unPublish,
  getCategory,
} from "../../actions/userAction";
import { formatDistance, subDays } from "date-fns";
import BorderExample from "../Spinner";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import moment from "moment";
import './card.css'

function AdminCard() {
  const navigation = useNavigate();
  const [threads, setThreads] = useState([]);
  const [search, setSearch] = useState('')
 
  const {
    getListUserResult,
    getListUserLoading,
    getListUserError,
    updatePublishResult,
    unPublishResult,
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
            <h3 className="text-center mt-5 mb-3">Threads List</h3>
            <div className="search">
            <Form id="form-search" className="d-flex col-lg-3 col-md-2 float-end">
              <div className="row">
              <Form.Control
                type="search"
                placeholder="Search"
                className="input-sm col-xs-3"
                style={{height:"40px"}}
                aria-label="Search"  
                onChange={(e) => setSearch(e.target.value)}
              />
               </div>
             
            </Form>
            </div>
            {threads ? (
              threads
                .filter((e) => e.title.toLowerCase().includes(search))
                .map((x) => {
                  let createdAt = moment(x.createdAt).fromNow(true);
                  return (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="col-lg-4 col-md-12 d-flex justify-content-center mt-3"
                      >
                        <Card
                          className="card rounded-08 shadow border-0 p-2"
                          style={{ height: "18rem", width: "18rem" }}
                        >
                          <Card.Body>
                            <Card.Title>{x.author.username}</Card.Title>
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
                      </motion.div>
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

export default AdminCard;
