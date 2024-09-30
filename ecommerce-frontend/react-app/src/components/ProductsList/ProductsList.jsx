import React, { useEffect, useState } from 'react'
import './productslist.css'
import { Card } from '@mui/material'

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { CircularProgress, Rating } from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from "../../redux/reducers/productSlice";
import Search from '../Search/Search';

const ProductsList = () => {
    const [productslist,setProductsList] = useState([]);
    //redux
    const dispatch = useDispatch();
    const currentProductsList = useSelector((state) => state.products);

    const getAllProducts = async () => {
        try{
            const response = await fetch("http://localhost:8000/api/products/", {
                method: 'GET',
                headers: {'content-type': 'application/json',}
            });
    
            if(response.ok){
                const data = await response.json();
                console.log(data);
                setProductsList(data);
                //redux
                dispatch(updateProducts(data));
            }
            else if(response.status === 400){
                console.log("error")
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getAllProducts();
    },[]);
  return (
    <div id='productslist-container'>
        <span id='productslist-title'>LIST OF PRODUCTS</span>

       

        <div id='productslist-row'>
            {productslist.map((item,index) => (
                <Card id='batteries' className='bestsellers-card'>
                    <span className='actions-container'>
                        <span className='favorite-container'>
                            <FavoriteIcon className='favorite-icon'/>
                        </span>
                        <span className='expand-container'>
                            <OpenInFullIcon className='expand-icon'/>
                        </span>

                    </span>


                    <CardMedia component="img"  image={`${item.image}`} 
                    alt={item.name} className='bestsellers-img'/>
                    <div className='card-details'>
                        <div className='ratings'>
                           <Rating readOnly value="4"/>

                        </div>

                        <span className='bestsellers-card-title'>{item.name}</span>
                        <span className='price-tag'>
                            Rs. {item.price}
                        </span>
                        <span className='addcart-btn'>
                           + Add to Cart
                        </span>

                    </div>

        
                </Card>
            ))}
        </div>
      
    </div>
  )
}

export default ProductsList
