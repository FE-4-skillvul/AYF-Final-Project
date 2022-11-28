import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import NavbarUser from '../components/NavbarUser'
import ParticlesBackground from '../components/ParticlesBackground'


function AboutPage() {
  return (
    <div>
        <NavbarUser />
        <h3 className="title-header text-white">About Us</h3>
        <ParticlesBackground/>
        <About />
        <Footer />
    </div>
  )
}

export default AboutPage