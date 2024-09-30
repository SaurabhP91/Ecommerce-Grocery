import React from 'react'
import './hero.css'
import HeroImage from "../../utils/Images/grocery-hero.jpg";


const Hero = () => {
  return (
    <div id='hero-container'>
        <img src={HeroImage} alt='hero-image' id='hero-image'/>
    </div>
  )
}

export default Hero
