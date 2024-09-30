import React from 'react'
import './bestsellers.css'
import { Card } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import VegetablesImage from  "../../utils/Images/large-set-isolated-vegetables-white-background.jpg";
import FruitsImage from  "../../utils/Images/fruits-cover.jpg"
import SnacksImage from  "../../utils/Images/snacks-cover.jpg";
import ElectronicsImage from  "../../utils/Images/electronics-cover.jpg";
import BananasImage from "../../utils/Images/bananas-img.jpg"
import BatteryImage from "../../utils/Images/battery-img.jpg"
import RiceImage from "../../utils/Images/rice-img.jpeg"
import WatermelonImage from "../../utils/Images/watermelon-img.webp"


import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { CircularProgress, Rating } from "@mui/material";



const Bestsellers = () => {
  return (
    <div id='bestsellers-container'>
        <span id='bestsellers-title'>Top Selling Products</span>

        <div id='bestsellers-row'>
            <Card id='batteries' className='bestsellers-card'>
                <span className='actions-container'>
                    <span className='favorite-container'>
                        <FavoriteIcon className='favorite-icon'/>
                    </span>
                    <span className='expand-container'>
                        <OpenInFullIcon className='expand-icon'/>
                    </span>

                </span>
                
                
                <CardMedia component="img"  image={'https://media.gettyimages.com/id/1457158797/photo/rechargeable-aa-batteries-with-white-and-positive-polarity-romania.jpg?s=612x612&w=0&k=20&c=laCQEayseCeBhZa57sxnMpA0co9JF6QSY-e7xaLY-MA='} 
                alt='vegetablesImage' className='bestsellers-img'/>
                <div className='card-details'>
                    <div className='ratings'>
                       <Rating readOnly value="4"/>

                    </div>
                    
                    <span className='bestsellers-card-title'>Batteries</span>
                    <span className='price-tag'>
                        Rs. 65
                    </span>
                    <span className='addcart-btn'>
                       + Add to Cart
                    </span>

                </div>


            </Card>

            <Card id='rice' className='bestsellers-card'>
                <span className='actions-container'>
                    <span className='favorite-container'>
                        <FavoriteIcon className='favorite-icon'/>
                    </span>
                    <span className='expand-container'>
                        <OpenInFullIcon className='expand-icon'/>
                    </span>

                </span>
                
                
                <CardMedia component="img"  image={"https://m.media-amazon.com/images/I/91MZComV1xL.jpg"} 
                alt='vegetablesImage' className='bestsellers-img'/>
                <div className='card-details'>
                    <div className='ratings'>
                       <Rating readOnly value="5"/>

                    </div>
                    
                    <span className='bestsellers-card-title'>India Gate Basmati Rice</span>
                    <span className='price-tag'>
                        Rs. 180
                    </span>
                    <span className='addcart-btn'>
                       + Add to Cart
                    </span>

                </div>


            </Card>

            <Card id='bananas' className='bestsellers-card'>
                <span className='actions-container'>
                    <span className='favorite-container'>
                        <FavoriteIcon className='favorite-icon'/>
                    </span>
                    <span className='expand-container'>
                        <OpenInFullIcon className='expand-icon'/>
                    </span>

                </span>
                
                
                <CardMedia component="img" image={"https://media.gettyimages.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU="}
                alt='vegetablesImage' className='bestsellers-img'/>
                <div className='card-details'>
                    <div className='ratings'>
                       <Rating readOnly value="5"/>

                    </div>
                    
                    <span className='bestsellers-card-title'>Fresh Bananas</span>
                    <span className='price-tag'>
                        Rs. 30
                    </span>
                    <span className='addcart-btn'>
                       + Add to Cart
                    </span>

                </div>


            </Card>

            <Card id='watermelon' className='bestsellers-card'>
                <span className='actions-container'>
                    <span className='favorite-container'>
                        <FavoriteIcon className='favorite-icon'/>
                    </span>
                    <span className='expand-container'>
                        <OpenInFullIcon className='expand-icon'/>
                    </span>

                </span>
                
                
                <CardMedia component="img" image={"https://media.gettyimages.com/id/157405770/photo/melon-wallpaper.jpg?s=612x612&w=0&k=20&c=Ino9EP0n7O1CPczzOTk2a2KuoNkLu8GNWavoOk6hw4Y="} 
                alt='vegetablesImage' className='bestsellers-img'/>
                <div className='card-details'>
                    <div className='ratings'>
                       <Rating readOnly value="4"/>

                    </div>
                    
                    <span className='bestsellers-card-title'>Fresh Watermelon</span>
                    <span className='price-tag'>
                        Rs. 100
                    </span>
                    <span className='addcart-btn'>
                       + Add to Cart
                    </span>

                </div>


            </Card>

            <Card id='bread' className='bestsellers-card'>
                <span className='actions-container'>
                    <span className='favorite-container'>
                        <FavoriteIcon className='favorite-icon'/>
                    </span>
                    <span className='expand-container'>
                        <OpenInFullIcon className='expand-icon'/>
                    </span>

                </span>
                
                
                <CardMedia component="img" image={"https://media.istockphoto.com/id/1208882100/photo/bread-bag-packaging-with-sliced-bread-inside-illustration.jpg?s=612x612&w=0&k=20&c=genEnYsbcdeecCX2X-gWp3m0ipxOcxVUbLcG9wGb7Ks="} 
                alt='vegetablesImage' className='bestsellers-img'/>
                <div className='card-details'>
                    <div className='ratings'>
                       <Rating readOnly value="4"/>

                    </div>
                    
                    <span className='bestsellers-card-title'>Bread</span>
                    <span className='price-tag'>
                        Rs. 25
                    </span>
                    <span className='addcart-btn'>
                       + Add to Cart
                    </span>

                </div>


            </Card>
        </div>
    </div>
  )
}

export default Bestsellers
