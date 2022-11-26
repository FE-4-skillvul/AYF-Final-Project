import React from 'react'
import DetailUser from '../components/DetailUser'
import NavbarLanding from '../components/NavbarLanding'

function DetailPageUser() {
  return (
    <div>
      <NavbarLanding/>
        <div className="title-header">
          <h4>DETAIL POST</h4>
        </div>
      <DetailUser/>
    </div>
  )
}

export default DetailPageUser
