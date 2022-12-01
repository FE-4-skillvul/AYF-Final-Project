import Carousel from 'react-bootstrap/Carousel';
import './slide.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import {
  getUname
} from "../../actions/userAction";
import { useEffect, useState } from 'react';
import "./slide.css";
function MentalInfo() {
  const uname = localStorage.getItem("USERNAME");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUname());
  }, [dispatch]);
 
  return (
   <>
    <div id='jumbotron' className="mt-4 p-5 bg-success text-white d-flex justify-content-between rounded w-75 mx-auto" style={{height:'250px'}}>
      <div id='text'>
      <h1>Hi, {uname}</h1>
      <h3>Mental Health Threads Page</h3>
      <p>We trying to be your good listener for your Mental Health story</p>
      
      </div>
      <div className="dark-overlay">
      <img id='img-jumbotron' className='mt-4' src="/../../images/youth.png" style={{height:'200px'}} alt="" />
      </div>
    </div>

  </>
  );
}

export default MentalInfo;