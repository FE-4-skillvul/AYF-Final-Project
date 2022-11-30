import React from 'react'
import About from '../components/About'
import Footer from '../components/footer/Footer'
import NavbarLanding from '../components/NavbarLanding'

function AboutPage() {
  return (
    <div>
        < NavbarLanding/>
        <div className="title-header">
          <h4>ASEAN YOUTH FORUM</h4>
          <p>ABOUT US</p>
        </div>
       <About/>
       <Footer/>
    </div>
  )
}

export default AboutPage
