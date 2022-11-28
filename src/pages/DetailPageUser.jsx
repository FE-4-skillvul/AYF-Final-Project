import React from 'react'
import { useParams } from 'react-router-dom'
import DetailUser from '../components/DetailUser'
import NavbarUser from '../components/NavbarUser'

function DetailPageUser() {

  return (
    <div>
      <NavbarUser/>
        <div className="title-header">
          
        </div>
      <DetailUser/>
    </div>
  )
}

export default DetailPageUser
