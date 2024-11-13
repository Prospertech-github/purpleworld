import React from 'react'
import Navbar from '../../components/Navbar'
import DarkBG from '../../components/DarkBG'
import Footer from '../../components/Footer'

export default function Dashboard() {
  return (
    <>
        <Navbar />
        <DarkBG text='My Dashboard' />
        <Footer />
    </>
  )
}
