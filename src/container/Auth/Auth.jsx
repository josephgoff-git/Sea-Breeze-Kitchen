import React, { useState } from 'react';
// import Cookies from 'universal-cookie';
// import axios from 'axios';

// import signinImage from '../assets/signup.jpg';
import { images } from '../../constants';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from "react-router-dom";
import './Auth.css';

// const cookies = new Cookies();

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent reload page on submit 

        const { username, password, phoneNumber, avatarURL } = form;

        // const URL = 'https://localhost:5000/auth';
        // const URL = 'https://medical-pager.herokuapp.com/auth';

        // const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
        //     username, password, fullName: form.fullName, phoneNumber, avatarURL,
        // });

        // cookies.set('token', token);
        // cookies.set('username', username);
        // cookies.set('fullName', fullName);
        // cookies.set('userId', userId);

        // if(isSignup) {
        //     cookies.set('phoneNumber', phoneNumber);
        //     cookies.set('avatarURL', avatarURL);
        //     cookies.set('hashedPassword', hashedPassword);
        // }

        window.location.reload();
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <NavLink to="/"><button className="back_button" style={{marginBottom: '30px', width: '45px', height: '45px', borderRadius: '50%', border: 'none', backgroundColor: 'white'}} ><IoIosArrowBack style={{fontSize: '30px', marginRight: '5px'}} /></button></NavLink>

                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input 
                                    name="fullName" 
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Email</label>
                                <input 
                                    name="username" 
                                    type="text"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input 
                                    name="phoneNumber" 
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                       
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input 
                                    name="password" 
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    name="confirmPassword" 
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                />
                            </div>
                            )}
                        <div className="auth__form-container_fields-content_button">
                            <NavLink to="/"><button>{isSignup ? "Sign Up" : "Sign In"}</button></NavLink>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup
                             ? "Already have an account? " 
                             : "Don't have an account? "
                             }
                             <span onClick={switchMode}>
                             {isSignup ? 'Sign In' : 'Sign Up'}
                             </span>
                        </p>
                    </div>
                </div> 
            </div>
            <div className="auth__form-container_image">
                <img src={images.outside2} alt="sign in" />
            </div>
        </div>
    )
}

export default Auth