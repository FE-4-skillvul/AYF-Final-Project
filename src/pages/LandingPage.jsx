import React from 'react'
import NavbarLanding from '../components/NavbarLanding'
import Asean from '../components/Asean'
import Helps from '../components/Helps'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Country from '../components/Country'
import { motion } from 'framer-motion'

function LandingPage() {
  return (
    <div>
        <NavbarLanding />
        <Hero />
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
      <Footer/>

    </div>
  )
}

export default LandingPage