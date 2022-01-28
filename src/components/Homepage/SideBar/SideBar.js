import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = (props) => {
    // console.log(props.blogs);
    const blogs = props.blogs;
    // const { image, address,location } = props.blog;
    return (
        <>
            <Carousel autoplay>

                {
                    blogs.map((blog) => (
                        <>
                         <Link to={`/blogDetail/${blog._id}`}>
                        <div>
                            <img className="object-cover" src={blog.image} alt="" />
                            <p className="legend">{blog.address || blog.location}</p>

                            {/* button */}
                            {/* <div className="read-now-div">
                               <button className="bg-amber-200 hover:bg-amber-500 text-neutral-800 font-bold py-2 px-4 rounded-full">
                                <Link to={`/blogDetail/${blog._id}`}>Read Now</Link>
                              </button>
                            </div> */}
                            {/* end of button */}
                            

           
                         </div>
                        </Link>
                        </>
                    ))
                }
            </Carousel>
        </>
    );
};

export default SideBar;