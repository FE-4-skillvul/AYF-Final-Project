import React, { useEffect } from "react";
import {
  AddPost,
  Cards,
  ModalComponent,
  Navbar,
  Slider,
  ThreadsList,
  Topics,
} from "../components";
import NavbarUser from "../components/NavbarUser";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getListUser, updatePublish, unPublish } from "../actions/userAction";
import { formatDistance, subDays } from "date-fns";
import BorderExample from "../components/Spinner";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import moment from "moment";
import MentalCard from "../components/Card/mentalCard";
import MentalInfo from "../components/Slider/MentalInfo";
import MentalCardAdmin from "../components/Card/mentalCardAdmin";
import NavbarAdmin from "../components/NavbarAdmin";

function MentalHealthAdmin() {
  const RID = "6385e3cace9651ed571871d7";
  const getRID = localStorage.getItem("RID");
  const admin = RID === getRID;
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
  return (
    <>
      {admin ? <NavbarAdmin/> : <NavbarUser />}
      <div className="wrapper">
        <AddPost />
        <MentalInfo />
        <Outlet />
        <MentalCardAdmin />
      </div>
      <Footer />
    </>
  );
}

export default MentalHealthAdmin;
