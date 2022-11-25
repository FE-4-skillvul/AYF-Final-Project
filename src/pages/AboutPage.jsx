import React from 'react'
import About from '../components/About'
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
    </div>
  )
}

export default AboutPage
