import React from 'react'
import './footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';



const Footer = () => {
  return (
    <div id='footer-container'>
        <div className='footer-column'>
            <div id='footer-logo'>
                <span id='eco'>Eco </span> Shop
            </div>

            <span className='footer-item'>
                Track Order
            </span>
            <span className='footer-item'>
                Delivery & Returns
            </span>
            <span className='footer-item'>
                Warranty
            </span>
    
      </div>

        <div className='footer-column'>
            <span className='footer-item footer-title'>
                About Us
            </span>

            <span className='footer-item'>
                Work With Us
            </span>
            <span className='footer-item'>
                News
            </span>
            <span className='footer-item'>
                Investors
            </span>
    
        </div>

        <div className='footer-column'>
            <span className='footer-item footer-title'>
                Useful Links
            </span>

            <span className='footer-item'>
                Secure Payment
            </span>
            <span className='footer-item'>
                Privacy Policy
            </span>
            <span className='footer-item'>
                Terms of Use
            </span>
            <span className='footer-item'>
               Archived Products
            </span>
    
        </div>

        <div className='contact-column'>
            <span className='footer-item footer-title' style={{marginBottom:'20px'}}>
                Contact Info
            </span>

            <span className='footer-item' style={{marginBottom:'20px'}}>
                <span className='footer-icon-container'>
                    <LocationOnIcon className='footer-icon'/>
                </span>

                <span className='contact-details'>
                    <span className='footer-title' style={{marginBottom:'10px'}}>
                        Address:
                    </span>

                    <span className='footer-item'>
                        4517, Marol Military Road <br/>
                        Mumbai Maharashtra
                    </span>
                </span>
               
            </span>

            <span className='footer-item' style={{marginBottom:'20px'}}>
                <span className='footer-icon-container'>
                    <PhoneIcon className='footer-icon'/>
                </span>

                <span className='contact-details'>
                    <span className='footer-title' style={{marginBottom:'10px'}}>
                        Phone:
                    </span>

                    <span className='footer-item'>
                        +880171889547
                    </span>
                </span>
               
            </span>

            <span className='footer-item' style={{marginBottom:'20px'}}>
                <span className='footer-icon-container'>
                    <EmailIcon className='footer-icon'/>
                </span>

                <span className='contact-details'>
                    <span className='footer-title' style={{marginBottom:'10px'}}>
                        Email:
                    </span>

                    <span className='footer-item'>
                        Demo@gmail.com
                    </span>
                </span>
               
            </span>
    
        </div>
        
        <div id='follow-container'>
           
            <span className='footer-title'>
                Follow Us
            </span>
            <span id='follow-icons-container'>
                <FacebookIcon className='follow-icons'/>
                <InstagramIcon className='follow-icons'/>
                <YouTubeIcon className='follow-icons'/>
            </span>
        </div>

       


    </div>
  )
}

export default Footer
