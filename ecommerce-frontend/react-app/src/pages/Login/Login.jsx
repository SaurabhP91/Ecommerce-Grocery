import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LoginComponent from '../../components/Logincomponent/LoginComponent'
import DiscountCoupon from '../../components/DiscountCoupon/DiscountCoupon'
import Footer from '../../components/Footer/Footer'

const Login = () => {
  return (
    <>
        <Navbar/>
        <LoginComponent/>
        <DiscountCoupon/>
        <Footer/>
    </>
  )
}

export default Login
