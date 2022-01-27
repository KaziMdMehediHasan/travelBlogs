import React from 'react';
import { Link } from 'react-router-dom';
import Blogs from './Blogs/Blogs';
import CarouselComponent from './CarouselComponent/CarouselComponent';


const Homepage = () => {
    return (
        <>
            <div className="mb-3xl">
                <CarouselComponent />
            </div>
            
            <h1 className="text-7xl text-center" style={{'margin-top':'10rem'}}>Blogs</h1>
            <Blogs/>
        </>
    );
};

export default Homepage;