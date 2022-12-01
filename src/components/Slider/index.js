
import './slide.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import {
  getUname
} from "../../actions/userAction";
import { useEffect, useState } from 'react';

function UncontrolledExample() {
  const [userData, setUserData] = useState([])
  const dispatch = useDispatch();
  const {
    getUnameResult
  } = useSelector((state) => state.UserReducer);
  
  useEffect(() => {
    if (getUnameResult) {
     setUserData (getUnameResult.data) 
    }
  }, [getUnameResult, dispatch]);
 
  useEffect(() => {
    dispatch(getUname());
  }, [dispatch]);

  return (
   <>
    <div id='jumbotron' className="mt-4 p-5 rounded-08 shadow border-0 text-white d-flex justify-content-between rounded w-75 mx-auto" style={{height:'250px'}}>
      <div id='text'>
      <h1>Hi, {userData.username}</h1>
      <h3>Welcome to ASEAN Youth Forum</h3>
      </div>
      <div className="dark-overlay">
      <img id='img-jumbotron' className='mt-4' src="./../../images/youth.png" style={{height:'200px'}} alt="" />
      </div>
    </div>

  </>
  );
}

export default UncontrolledExample;