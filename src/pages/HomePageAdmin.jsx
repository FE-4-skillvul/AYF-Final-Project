import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import Footer from '../components/Footer'
import CardAdmin from '../components/CardAdmin'
import AdminCards from '../components/Card/admin'
import Form from 'react-bootstrap/Form';
import ParticlesBackground from '../components/ParticlesBackground'
import { Slider, Topics } from '../components'


function HomePageAdmin() {
  const RID = '6385e3cace9651ed571871d7'
  const getRID = localStorage.getItem("RID")
  if(getRID !== RID){
    window.location='/404'
  }
  return (
    <div className="content">
        <NavbarAdmin />
        <Slider/>
        <Topics/>
        <AdminCards/>
        <Footer />
    </div>
  )
}

export default HomePageAdmin