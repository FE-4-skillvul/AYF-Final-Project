import React from 'react'
import CardProfile from '../components/Card/cardProfile'
import Footer from '../components/Footer'
import NavbarUser from '../components/NavbarUser'
import ParticlesBackground from '../components/ParticlesBackground'

function Profile() {
  return (
    <>
    <NavbarUser/>
    <ParticlesBackground/>
    <CardProfile/>
    <Footer/>
    </>
  )
}

export default Profile