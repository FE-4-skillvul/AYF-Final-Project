import React from 'react'
import { useParams } from 'react-router-dom'
import DetailUser from '../components/DetailUser'
import NavbarAdmin from '../components/NavbarAdmin'
import NavbarUser from '../components/NavbarUser'

function DetailPageUser() {
  const RID = '6385e3cace9651ed571871d7'
  const getRID = localStorage.getItem('RID')
  const admin = RID === getRID
  return (
    <div>
      {admin ? <NavbarAdmin/> : <NavbarUser/> }
      
        <div className="title-header">
          
        </div>
      <DetailUser/>
    </div>
  )
}

export default DetailPageUser
