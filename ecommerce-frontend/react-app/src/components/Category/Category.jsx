import React, { useEffect, useRef } from 'react'
import './category.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import HeroImage from "../../utils/Images/grocery-hero.jpg";
import VegetablesImage from  "../../utils/Images/large-set-isolated-vegetables-white-background.jpg";
import FruitsImage from  "../../utils/Images/fruits-cover.jpg"
import SnacksImage from  "../../utils/Images/snacks-cover.jpg";
import ElectronicsImage from  "../../utils/Images/electronics-cover.jpg";

const Category = () => {

    /*const isInView = (element) => {
        const rect = element.getBoundingClientRect();
        
        return(
            rect.top>=-200 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    const handleScroll = () => {
        const items = document.querySelectorAll('.category-card');
        items.forEach( item => {
            if(isInView(item)) {
                item.classList.add('slide-in');
            }
            else {
                item.classList.remove('slide-in');
            }
            
        })
    }

    let timeout;
    window.addEventListener('scroll', function() {
        if(!timeout) {
            timeout = setTimeout(function() {
                handleScroll();
                timeout = null;
            },100);
        }
    });

    handleScroll();
    */

    const categoryRef = useRef(null);
    const categoryCardRef = document.querySelectorAll('.category-card')

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
              if(entry.isIntersecting) {
                const items = document.querySelectorAll('.category-card');
                items.forEach( item => {
                        item.classList.add('slide-in');
                    
                });
                
              } else {
                const items = document.querySelectorAll('.category-card');
                items.forEach( item => {
                        item.classList.remove('slide-in');
                    
                });
              }
            });
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold:0.2,
        });

        if(categoryRef.current){
            observer.observe(categoryRef.current);
        }

        return () => {
            if(categoryRef.current){
                observer.unobserve(categoryRef.current);
            }
        }
    },[]);
  return (
    <div id='category-container'>
            <span id='category-title'>Shop by Categories</span>

            <div id='category-card-row' ref={categoryRef}>
                <Card sx={{maxWidth: 300, minWidth:150}} id='vegetables-card' className='category-card'>
                    <CardHeader title="Vegetables" sx={{height:10, fontFamily: 'sans-serif'}} className='category-card-title'/>

                    <CardMedia component="img" height="220" image={VegetablesImage} alt='vegetablesImage' className='category-img'/>

                </Card>

                <Card sx={{maxWidth: 300, minWidth:150}} id='fruits-card' className='category-card'>
                    <CardHeader title="Fruits" sx={{height:10}} className='category-card-title'/>

                    <CardMedia component="img" height="220" image={FruitsImage} alt='fruitsImage' className='category-img'/>

                </Card>

                <Card sx={{maxWidth: 300, minWidth:150}} id='snacks-card' className='category-card'>
                    <CardHeader title="Food/Snacks" sx={{height:10}} className='category-card-title'/>
                    
                    <CardMedia component="img" height="220" image={SnacksImage} alt='snacksImage' className='category-img'/>
                </Card>

                <Card sx={{maxWidth: 300, minWidth:150}} id='electronics-card' className='category-card'>
                    <CardHeader title="Electronics" sx={{height:10}} className='category-card-title'/>

                    <CardMedia component="img" height="220" image={ElectronicsImage} alt='electronicsImage' className='category-img'/>

                </Card>
            </div>
            
    </div>
  )
}

export default Category
