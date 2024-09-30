import React, { useEffect, useState } from 'react'
import './cartpage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';


const Cartpage = () => {

    const [cartlist,setCartList] = useState([]);
    const [length, setLength] = useState(null);

    const currentuser = useSelector((state) => state.user);


    const getAllProducts = async (uId) => {
        try{
            if(!uId){
                console.log("No user logged in, cannot display cart");
            }
            const response = await fetch(`http://localhost:8000/api/cart/${uId}`, {
                method: 'GET',
                headers: {'content-type': 'application/json',}
            });
    
            if(response.ok){
                const data = await response.json();

                //preventing infinite loops by checking if cartlist needs to be updated
                if(JSON.stringify(data) !== JSON.stringify(cartlist)){
                    setCartList(data);
                }
                
            }
            else if(response.status === 400){
                console.log("error")
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const updateQuantity = async (pId, updatetype) => {

        try{
            const response = await fetch("http://localhost:8000/api/cart/66ab78f509f0cbcd3c549b53", {
                method: "POST",
                headers: {'content-type': 'application/json',},

                body: JSON.stringify({
                    productId: pId,
                    quantity: 1,
                    type: updatetype,
                }),
            });

            if(response.ok)
            {
                console.log("quantity updated");
                const data = await response.json();
                setCartList(data);
                
            }

        } catch (error) {
            console.log(error.message);

        }

    }

    const removeQuantity = async (pId) => {

        try{
            const response = await fetch(`http://localhost:8000/api/cart/66ab78f509f0cbcd3c549b53/${pId}`, {
                method: "DELETE",
                headers: {'content-type': 'application/json',},
            });

            if(response.ok)
            {
                console.log("item removed");
                const data = await response.json();
                setCartList(data);
            }

        } catch (error) {
            console.log(error.message);

        }

    }

    useEffect(() => {
        getAllProducts(currentuser?.currentUser?._id);
        console.log(currentuser);
       /* if (cartlist && cartlist.products && cartlist.products.length > 0) {
            console.log(cartlist.products[1]);
        } else {
            console.log('cartlist.products is empty or undefined');
        }*/
        
    },[cartlist]);
  return (
    <>
        <Navbar/>
        <h2 className='cart-title'>CART</h2>

        <div id='cart-container'>
            <table id='cart-table'>
                <thead>
                    <tr>
                        <th className='product-column'>Product</th>
                        <th className='price-column'>Price</th>
                        <th className='quantity-column'>Quantity</th>
                        <th className='total-column'>Total</th>
                        <th className='action-column'>Action</th>
                    </tr>

                </thead>
               
                <tbody>
                    {cartlist && cartlist.products && cartlist.products.length>0 ? (
                        <>
                            {cartlist?.products.map((item, index) => (
                            <tr key={index}>
                                <td className='product-data'>{item.productId.name}</td>
                                <td className='price-data'>{item.productId.price}</td>
                                <td className='quantity-data'>
                                    <button className='minus' onClick={() => item.quantity <= 1 ? removeQuantity(item.productId._id) : updateQuantity(item.productId._id, 'remove')}>
                                        -
                                    </button>
                                    {item.quantity}
                                    <button className='plus' onClick={() => updateQuantity(item.productId._id, 'add')}>
                                        +
                                    </button>
                                </td>
                                <td className='total-data'>{item.productId? item.productId.price * item.quantity : ""}</td>
                                <td className='action-data' onClick={() => removeQuantity(item.productId._id)}>DELETE</td>
                            </tr>
                            ))}

                            {/*Total row*/}
                            <tr>
                                <td colSpan="3" style={{textAlign: 'right', fontWeight:'bold'}}>
                                    Total:
                                </td>
                                <td>
                                    {cartlist.products.reduce((total,item) => {
                                    return total + item.productId.price * item.quantity;
                                    },0)}
                                </td>
                                <td></td>
                            </tr>

                        </>
                    ) : (<></>) }

                </tbody>
             

                <div id='cart-actions'>
                   <button className='clear'>Clear Cart</button>
                   <button className='update'>Update Cart</button>
                   <button className='proceed'>Proceed to Checkout</button>
                </div>
                    

            </table>
        </div>

        <Footer/>
    </>
  )
}

export default Cartpage
