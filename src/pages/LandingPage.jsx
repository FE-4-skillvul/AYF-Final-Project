import React from 'react'
import NavbarLanding from '../components/NavbarLanding'
import Hero from '../components/Hero'
import Helps from '../components/Helps'
import Country from '../components/Country'
import Footer from '../components/footer/Footer'

function LandingPage() {
  return (
    <>
     < NavbarLanding />
     < Hero />
     <div className="title-header">
        <h4>ASEAN YOUTH FORUM</h4>
        <p>FIND INFORMATION</p>
      </div>
        <Helps />
      <div className="title-header">
        <h4>ASEAN YOUTH FORUM</h4>
        <p>ASEAN COUNTRY</p>
      </div>
      <Country />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </>
  )
}

export default LandingPage
