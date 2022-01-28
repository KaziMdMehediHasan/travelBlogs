import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "./TopCarousel.css";

const TopCarousel = (props) => {
    // console.log(props.blogs);
    const blogs = props.blogs.slice(0,10);
    
    // const { image, address,location } = props.blog;
    return (
        <div className="w-9/12 mx-auto">
            <Carousel autoPlay>
                {
                    blogs.map((blog) => (
                        <div className="img-div">
                            <img className="object-cover" src={blog.image} alt="" />
                            <p className="legend">{blog.address || blog.location}</p>
                         </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default TopCarousel;