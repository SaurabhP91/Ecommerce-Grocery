import React from 'react'
import './homepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Category from '../../components/Category/Category';
import Bestsellers from '../../components/Bestsellers/Bestsellers';
import Footer from '../../components/Footer/Footer';
import DiscountCoupon from '../../components/DiscountCoupon/DiscountCoupon';


const Homepage = () => {
  return (
   <>
      <Navbar/>
      <Hero/>
      <Category/>
      <Bestsellers/>
      <DiscountCoupon/>
      <Footer/>
   </>
  )
}

export default Homepage
