import React from 'react'
import CardProfile from '../components/Card/cardProfile'
import PersonalCard from '../components/Card/personalCard'
import Footer from '../components/Footer'
import NavbarUser from '../components/NavbarUser'
import ParticlesBackground from '../components/ParticlesBackground'
import ProfileInfo from '../components/Slider/profileInfo'

function Profile() {
  return (
    <>
    <NavbarUser/>
    <div className='wrapper'>
    <ProfileInfo/>
    <PersonalCard/>
    </div>
    <Footer/>
    </>
  )
}

export default Profile