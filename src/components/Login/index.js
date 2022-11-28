import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userAction'
import { Link } from 'react-router-dom';
import axios from "axios"
import { motion } from 'framer-motion';



function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(
          login({
            email: email,
            password: password
          })
        );
    }

    
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
    <div className="container mt-5 col-md-7">
    <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <img src="images/tangga.jpg" className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="card-body text-center">
                <h2 className="card-title border-bottom mb-4 text-success">ASEAN YOUTH FORUM</h2>
                <h5 className="card-title mb-3">Login</h5>
            <form action="" onSubmit={(e)=> handleSubmit(e)} id="form">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="name@example.com" required/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
        
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="pword" placeholder="Password" required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="submit" className="btn btn-success">Login</button>
                <div className="container mt-3">
                <h7>Dont have account? <Link to='/register' style={{color:"green", textDecoration:"none"}}>Register</Link></h7>
                </div>
            </form>
            </div>  

          </div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default Login  