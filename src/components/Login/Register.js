import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // taking all the previous values
        const newLoginData = { ...loginData };
        //setting the new value to the corresponding value
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Password Mismatch');
        };
        // alert('Hello');
        registerUser(loginData.email, loginData.password, loginData.name, history);
        console.log(loginData);
        e.preventDefault();
    }
    return (
        <>
            <Navigation />

            <div className="w-3/4 mx-auto flex flex-col justify-center items-center h-[78vh]">
                <h1 className="text-5xl text-center font-bold my-5">Register as a Travel Blogger</h1>
            {!isLoading && <form className="md:w-1/2 mx-auto" onSubmit={handleLoginSubmit}>
                <input
                    className="border-solid border-2 border-gray-300 py-2 rounded-md shadow-md focus:outline-1 w-full my-3"
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    onBlur={handleOnBlur}
                    />
                    <br/>
                <input
                    className="border-solid border-2 border-gray-300 py-2 rounded-md shadow-md focus:outline-1 w-full my-3"
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    onBlur={handleOnBlur}
                    />
                    <br/>
                <input
                    className="border-solid border-2 border-gray-300 py-2 rounded-md shadow-md focus:outline-1 w-full my-3"
                    type='password'
                    name='password'
                    placeholder='Your Password'
                    onBlur={handleOnBlur}
                    />
                    <br/>
                <input
                    className="border-solid border-2 border-gray-300 py-2 rounded-md shadow-md focus:outline-1 w-full my-3"
                    type='password'
                    name='password2'
                    placeholder='Retype Your Password'
                    onBlur={handleOnBlur}
                    />
                    <br/>
                <button
                    className="bg-cyan-500 px-3 py-2 rounded-md shadow-md my-3">
                    Register
                </button>
                <NavLink to="/login">
                    <button
                        className="bg-cyan-500 px-3 py-2 rounded-md shadow-md md:ml-3">
                        Already Registered? Please Log in
                    </button>
                </NavLink>
            </form>}
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
                        <p className="font-bold">User Created Successfully!</p>
                        <p className="text-sm">Make sure you know how these changes affect you.</p>
                    </div>
                </div>
                </div>
            }
            {/* show error message */}
            {authError && 
            <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    User creation failed!
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

export default Register;