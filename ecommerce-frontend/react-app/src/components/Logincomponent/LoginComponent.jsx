import React, { useEffect, useRef, useState } from 'react'
import './login.css'
import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoginHeroImage from "../../utils/Images/login-hero.webp";
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/reducers/userSlice';



const LoginComponent = () => {
    const [emailVal,setEmailVal] = useState("");
    const [passVal,setPassVal] = useState("");

    const[firstname,setFirstName] = useState("");
    const[lastname,setLastName] = useState("");

    const loginRef = useRef(null);
    const registerRef = useRef(null);

    const navigate = useNavigate();

    const currentuser = useSelector((state) => state.user)
    const dispatch = useDispatch();
    

    const showLogin = () => {
        loginRef.current.style.display = 'flex';
        registerRef.current.style.display = 'none';

    }

    const showRegister = () => {
        loginRef.current.style.display = 'none';
        registerRef.current.style.display = 'flex';
    }
    
    const handleRegister = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:8000/api/auth/register",{
                method: 'POST',
                headers: {'content-type': 'application/json',},
                body: JSON.stringify({
                    name: firstname + " " + lastname,
                    email: emailVal,
                    password: passVal
                }),
            });
            
            if(response.ok){
                const data = await response.json();
                console.log(data);
                
                window.alert("User registered");
                dispatch(updateUser(data));
                navigate("/");
            }
            else if(response.status === 400){
                window.alert("Wrong credentials");
            }
        
        
        
        } catch(error) {
            console.log(error.message);

        }

    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:8000/api/auth/login", {
                method: 'POST',
                headers: {'content-type': 'application/json',},
                body: JSON.stringify({
                    email: emailVal,
                    password: passVal
                }),
            });
    
            if(response.ok){
                const data = await response.json();
                console.log(data);    
                window.alert("User logged in");

                //update redux store
                dispatch(updateUser(data));

                navigate("/");
            }
            else if(response.status === 400){
                console.log("error")
    
            }

        } catch (error) {
            console.log(error.message);

        }
    };

    useEffect(() => {
        
    });

  return (
    <div id='login-container'>
        <div id='form-container'>
            <form id='login-form' ref={loginRef} onSubmit={handleLogin}>
                <h2 className='form-title'>Log In</h2>


                <label for="email">Email Address*</label>
                <input type='email' name='email' placeholder='Email' onChange={(e) => setEmailVal(e.target.value)} className='form-input'/>

                <label for="password">Password*</label>
                <input type='password' name='password' placeholder='Password'  onChange={(e) => setPassVal(e.target.value)} className='form-input'/>

                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", width:'60%'}}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color='success'/>} label='Remember me'/>

                    </FormGroup>
                    <p className='forgot-pass'>Forgot Password?</p>
                </div>

                <input type='submit' className='login-submit' value="Log In"/>

                <div style={{display:'flex', alignItems:'center'}}>
                    <p>Don't have an account? </p> <p className='sign-up-link' onClick={showRegister}> Sign Up for Free</p>
                </div>
         

            </form>

            <form id='register-form' ref={registerRef} onSubmit={handleRegister}>
                <h2 className='form-title'>Create Account</h2>

                <div className='name-row'>
                    <span className='name-input-block'>
                        <label for="firstname">First Name*</label>
                        <input type='text' name='firstname' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} className='name-input'/>

                    </span>

                    <span className='name-input-block'>
                        <label for="lastname">Last Name*</label>
                        <input type='text' name='lastname' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} className='name-input'/>
                    </span>


                </div>

                <label for="email">Email Address*</label>
                <input type='email' name='email' placeholder='Email' onChange={(e) => setEmailVal(e.target.value)} className='form-input'/>
                

                <div className='name-row'>
                    <span className='name-input-block'>
                        <label for="password">Password*</label>
                        <input type='password' name='password' placeholder='Password'  onChange={(e) => setPassVal(e.target.value)} className='name-input'/>

                    </span>

                    <span className='name-input-block'>
                        <label for="retypepassword">Retype Password*</label>
                        <input type='password' name='retypepassword' placeholder='Password'  onChange={(e) => setPassVal(e.target.value)} className='name-input'/>

                    </span>
                </div>


                <FormControlLabel control={<Checkbox color='success'/>} label='I agree with all the terms and conditions in EcoShop'/>

                <button type='submit' className='login-submit'>Create Account</button>

                <div style={{display:'flex', alignItems:'center'}}>
                    <p>Already have an account? </p> <p className='login-link' onClick={showLogin}>Log In</p>
                </div>
         
            </form>
        </div>

        <div id='login-image-container'>
            <img src={LoginHeroImage} alt='hero-image' id='login-hero-image'/>

        </div>
      
    </div>
  )
}


export default LoginComponent
