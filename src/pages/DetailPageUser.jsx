import React from 'react'
import DetailUser from '../components/DetailUser'
import Footer from '../components/footer/Footer'
import NavbarLanding from '../components/NavbarLanding'

function DetailPageUser() {
  return (
    <div>
      <NavbarLanding/>
        <div className="title-header">
          <h4>DETAIL POST</h4>
        </div>
      <DetailUser/>
      <Footer/>
    </div>
  )
}

export default DetailPageUser
