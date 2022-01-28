import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // taking all the previous values
        const newLoginData = { ...loginData };
        //setting the new value to the corresponding value
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
// google login handler
    const handleGoogleLogin = (e) => {
        signInWithGoogle(location,history);
    }
    return (
        <>
            <Navigation/>
        <div className="md:w-3/4 h-[78vh] mx-auto flex flex-col justify-center item-center">
          
            <h1 className="text-5xl my-5 text-center font-bold">User Login</h1>
            <form className="md:w-1/2 mx-auto" onSubmit={handleLoginSubmit}>
                <input
                    className="border-solid border-2 border-gray-300 py-2 my-3 rounded-md shadow-md focus:outline-1 w-full"
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    onChange = {handleOnChange}
                    />
                    <br/>
                <input
                    className="border-solid border-2 border-gray-300 py-2 rounded-md shadow-md focus:outline-1 w-full my-3"
                    type='password'
                    name='password'
                    placeholder='Your Password'
                    onChange = {handleOnChange}
                    />
                    <br/>
                <button
                    className="bg-cyan-500 px-3 py-2 rounded-md shadow-md ml-3">
                    Login
                </button>
                <NavLink to="/register">
                    <button
                        className="bg-cyan-500 px-3 py-2 rounded-md shadow-md ml-3">
                        New User? Register Now
                    </button>
                </NavLink>
            </form>
                <p className="text-center my-5">-------------Login With Google-------------</p>
                
                <div className="flex justify-center items-center my-5">
                    <button onClick={handleGoogleLogin}  className="bg-cyan-500 px-3 py-2 rounded-md shadow-md ml-3">
                        Google Login
                    </button>
                </div>

            {
                isLoading &&
                <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            }
            {/* show successful message */}
            {
             user?.email &&
                <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
                        </div>
                    <div>
                        <p className="font-bold">Logged In Successfully!</p>
                    </div>
                </div>
                </div>
            }
            {/* show error message */}
            {authError && 
            <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    Login Failed!
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>{authError}</p>
                </div>
                </div>}
            
            </div>
            <Footer/>
        </>
    );
};

export default Login;