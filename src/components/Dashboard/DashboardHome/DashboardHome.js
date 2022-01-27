// import Aos from 'aos';
// import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

import "./DashboardHome.css"

const DashboardHome = () => {
    const { user } = useAuth();
    // console.log(user);

        // // animation on scroll
        // useEffect(() =>{
        //     Aos.init({duration : 1000});
        //   },[]);
    return (
        <div data-aos="fade-up" className="dashboard-home-parent">
            <h1 className="text-center text-light fw-bold p-5">Welcome to Your Dashboard , {user.displayName}! </h1>
            <p className="text-center text-muted fw-bold">All of Your accessibility at one place</p>
        </div>
    );
};

export default DashboardHome;