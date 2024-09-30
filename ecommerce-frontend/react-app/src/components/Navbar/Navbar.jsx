import React, { useEffect, useRef, useState } from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/reducers/userSlice';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const [isActive,setIsActive] = useState(false);
    const [dropdownStatus, setDropdownStatus] = useState("none");
    const [menuStatus,setMenuStatus] = useState("none");

    const dropdownRef = useRef(null);
    const menuRef = useRef(null);
    const footerRef = useRef(null);


    const navigate = useNavigate();

    const menuDropdown = () => {
        if(menuStatus === "none")
            {
              setMenuStatus("flex");
        
            }
        else{
              setMenuStatus("none");
            }
        menuRef.current.style.display = menuStatus;
    }

    const handleActive = () => {
        setIsActive(true);
    }

    const handleClickLogin = () => {
        navigate("/login");
    }

    const handleClickHome = () => {
        navigate("/");
    }

    const handleClickShop = () => {
        menuRef.current.style.display = "none";
        navigate("/products");
        
    }

    const handleDropdown = () => {
        if(dropdownStatus === "none")
            {
              setDropdownStatus("flex");
        
            }
        else{
              setDropdownStatus("none");
            }
        dropdownRef.current.style.display = dropdownStatus;
    }

    //Redux
    const currentuser = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleClickLogout = () => {
        dispatch(updateUser(null));
        navigate("/");
        window.location.reload();
    }

    const handleClickCart = () => {
        navigate("/cart");
    }

    const handleClickContact = () => {
        /*if(footerRef.current){
            footerRef.current.scrollIntoView({behaviour: 'smooth'});
        }*/

       
    }



    useEffect(() => {

    },[])
  return (
    <div id='navbar-container'>

        <div id='menu-container' onClick={menuDropdown}>
            <MenuIcon/>
        </div>

        <div id='menu-dropdown' ref={menuRef}>
            <span className='navitem' onClick={handleClickHome}>
                Home
            </span>
            <span className={`navitem ${isActive ? 'selected': ''}`}
            onClick={handleClickShop}>Shop</span>
            <span className='navitem'>New Arrivals</span>
            <span className='navitem'>Orders</span>
            <span className='navitem' >Contact Us</span>

        </div>
        
        <div id='nav-logo'>
            <span id='eco'>Eco </span> Shop
        </div>

        <div id='nav-items-container'>
            <span className='navitem' onClick={handleClickHome}>
                Home
            </span>
            <span className={`navitem ${isActive ? 'selected': ''}`}
            onClick={handleClickShop}>Shop</span>
            <span className='navitem'>New Arrivals</span>
            <span className='navitem'>Orders</span>
            <span className='navitem' >Contact Us</span>
        </div>
        

        <div id='search-container'>
            <input type='text' placeholder='Search Product...' id='searchbar'/>

            <select id='categories' name='categories'>
                <option defaultValue value=''>All Categories</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Food">Food</option>
                <option value="Electronics">Electronics</option>
                
            </select>
            <span className='icon-container'>
                <SearchIcon style={{color:'white'}}/>
            </span>
                
            
        </div>

        {!currentuser.currentUser && (
            <>
            
                <div id='signin' onClick={handleClickLogin}>
                    <button type='button' className='signin-btn'>Sign In</button>
                </div>
            
            </>
        )}



        
        {currentuser.currentUser && (
            <>
            <div id='account-nav' onClick={handleDropdown}>
                
                    <span id='account-icon-container'>
                        <AccountCircleOutlinedIcon className='account-icon'/>
                    </span>
                    <span id='account-name'>
                        {currentuser?.currentUser?.name}
                    </span>
                    <span id='arrow-icon-container'>
                        <ArrowDropDownIcon className='arrow-icon' sx={{fontSize:'30px'}}/>
                    </span>
             

                <span id='user-dropdown' ref={dropdownRef}>
                  <p className='dropdown-btn'>Profile</p>
                  <p className='dropdown-btn' onClick={handleClickCart}>My Cart</p>
                  <p className='dropdown-btn'>Order History</p>

                  <p className='dropdown-btn' onClick={handleClickLogout}>Logout</p>
                </span>
            </div>

            </>
        )}
        
      
    </div>
  )
}

export default Navbar
