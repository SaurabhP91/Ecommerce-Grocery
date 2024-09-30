import React from 'react'
import './products.css'
import Navbar from '../../components/Navbar/Navbar'
import ProductsList from '../../components/ProductsList/ProductsList'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Search/Search'

const Products = () => {
  return (
    <>
    <Navbar/>
    <Search/>
    <ProductsList/>
    <Footer/>
    </>
  )
}

export default Products
