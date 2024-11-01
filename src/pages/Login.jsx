import React from 'react'
import Navbar from '../components/Navbar'
import DarkBG from '../components/DarkBG'
import FormComponent from '../components/FormComponent'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <div>
        <Navbar />
        <DarkBG text='My Account'> 
            <p>Home  /  My Account</p>
        </DarkBG>
        <FormComponent register={true}/>
        <Footer />
    </div>
  )
}
