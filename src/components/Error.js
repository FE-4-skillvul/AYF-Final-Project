import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='container text-center '>
        <img className='mw-100' style={{ maxHeight:"400px" }} src="../images/404.jpg" alt="" srcset="" />
        <h3>You need to login First to See Homepage</h3>
        <Link to={'/login'}><Button variant='success'><h5>LOGIN</h5></Button></Link>
    </div>
  )
}

export default Error