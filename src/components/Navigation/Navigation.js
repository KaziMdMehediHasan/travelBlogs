import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
    const {user, logout} = useAuth();
    const handleHam =()=>{
        console.log('clicked');
        const ham = document.getElementById("mobile-menu");
        ham.classList.toggle("hidden");
    }
    // const location = useLocation();
    return (
        <>
        {/* navbar goes here */}
            <nav className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">

                <div className="flex space-x-4">
                    {/* logo */}
                    <div>
                    <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                        <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span className="font-bold">Better Dev</span>
                    </a>
                    </div>

                    {/* primary nav */}
                    <div className="hidden md:flex items-center space-x-1">
                    <NavLink to="packages" href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Packages</NavLink>
                    <NavLink to="" href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</NavLink>
                    </div>
                </div>

                {/* secondary nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            {
                                user?.email ? <button onClick={logout} to="/login" className="py-5 px-3">Logout</button>
                                    :
                                <NavLink to="/login" className="py-5 px-3">Login</NavLink>
                            }
                            {
                                user?.displayName ? <li>{ user?.displayName }</li> : ''
                            }
 
                    <NavLink to="/register" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Register</NavLink>
                </div>

                {/* mobile button goes here */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={handleHam}
                        className="mobile-menu-button">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>

                </div>
            </div>

            {/* mobile menu */}
            <div id='mobile-menu' className="mobile-menu hidden md:hidden">
                <NavLink to="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</NavLink>
                <NavLink to="" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</NavLink>
            </div>
            </nav>

            {/* content goes here */}
            <div className="py-32 text-center">
            <h2 className="font-extrabold text-4xl">Navbars in Tailwind!</h2>
            </div>
    </>
    );
};

export default Navigation;