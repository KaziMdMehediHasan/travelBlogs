import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const TopCarousel = (props) => {
    // console.log(props.blogs);
    const blogs = props.blogs;
    // const { image, address,location } = props.blog;
    return (
        <div className="w-75">
            <Carousel autoplay>
                {
                    blogs.map((blog) => (
                        <div>
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