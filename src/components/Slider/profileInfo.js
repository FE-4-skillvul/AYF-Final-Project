import Carousel from "react-bootstrap/Carousel";
import "./slide.css";
import { motion } from "framer-motion";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { getUname } from "../../actions/userAction";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import EditPass from "../EditPassword";

function ProfileInfo() {
  const uname = localStorage.getItem("USERNAME");
  const createdAt = localStorage.getItem("UCreatedAt");
  const [userData, setUserData] = useState([])
  const dispatch = useDispatch();
  const {
    getUnameResult
  } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(getUname());
  }, [dispatch]);

  useEffect(() => {
    if (getUnameResult) {
     setUserData (getUnameResult.data) 
    }
  }, [getUnameResult, dispatch]);
 
  return (
    <>
      <div
        id="jumbotron"
        className="mt-4 p-5 bg-success text-white d-flex justify-content-between rounded w-75 mx-auto"
        style={{ height: "250px" }}
      >
        <div id="profile-info">
          <div className="mt-3 mx-3">
            <h1>{userData.username}</h1>
            <h5>Joined : {moment(userData.createdAt).format("MMM Do YY")}</h5>
          </div>
          
        </div>
        <EditPass/>
        
      </div>
    </>
  );
}

export default ProfileInfo;
