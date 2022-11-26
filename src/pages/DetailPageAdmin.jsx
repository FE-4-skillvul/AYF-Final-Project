import React from 'react'
import DetailAdmin from '../components/DetailAdmin'
import NavbarLanding from '../components/NavbarLanding'

function DetailPageAdmin() {
  return (
    <div>
        <NavbarLanding/>
        <div className="title-header">
          <h4>DETAIL POST</h4>
        </div>
        <DetailAdmin/>
    </div>
  )
}

export default DetailPageAdmin