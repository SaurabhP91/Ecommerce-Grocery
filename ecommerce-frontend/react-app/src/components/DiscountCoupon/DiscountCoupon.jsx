import React, { useEffect, useRef } from 'react'
import './discountcoupon.css'
import HeroImage from "../../utils/Images/grocery-hero.jpg";
import EmailIcon from '@mui/icons-material/Email';

const DiscountCoupon = () => {
  const detailsRef = useRef(null);
  const discountImage = useRef(null);

  useEffect(() => {
    
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            if(detailsRef.current)
            detailsRef.current.classList.add('slide-in');
          } else {
            entry.target.classList.remove('slide-up');
            if(detailsRef.current)
            detailsRef.current.classList.remove('slide-in');
          }
        });
      }
  
      const observer = new IntersectionObserver(handleIntersection, {
        threshold:0.2,
      });
      
      if(discountImage.current) {
        observer.observe(discountImage.current);
      }

      return () => {
        if(discountImage.current) {
          observer.unobserve(discountImage.current);
        }
      };
  },[]);
  return (
    <div id='discount-container'>
      <img src={HeroImage} alt='hero-image' id='discount-image' ref={discountImage}/>

      <span className='discount-details' ref={detailsRef}>
        <h2 className='discount-title'>Get <span style={{color:'yellow'}}>20% </span>Off Discount Coupon</h2>
        <p style={{color:'white'}}>by Subscribing to our Newsletter</p>


        <div className='discount-email-container'>
            <EmailIcon className='email-icon'/>
            <input type='email' placeholder='Email' className='discount-email'/>
            <button type='submit' className='discount-btn'>Get the Coupon</button>

        </div>
       
      </span>
    </div>
  )
}

export default DiscountCoupon
