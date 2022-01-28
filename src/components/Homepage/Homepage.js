import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Blogs from './Blogs/Blogs';
import CarouselComponent from './CarouselComponent/CarouselComponent';
import TopCarousel from './TopCarousel/TopCarousel';


const Homepage = () => {
const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
//   let data = []

  useEffect(() => {
    fetch('https://vast-thicket-90925.herokuapp.com/experiences')
      .then(res => res.json())
      .then(data => {
        // console.log(data.experiences);
        setBlogs(data?.experiences);
        setLoading(false);
      })
  }, [blogs]);

//     const data2 = blogs?.map((blog) => {
//      return data.push({ image: blog.image, caption: blog?.location || blog?.address });
//   })


  
//   mapping data and then extracting all the image and location info then storing it inside the data array

  

//   console.log(data);
    return (
        <>
          <Navigation/>
            <div className="mt-10">
          {/* <CarouselComponent/> */}
             <TopCarousel blogs={blogs}/>
            </div>
            
            <h1 className="text-7xl text-center" style={{'margin-top':'5rem'}}>Blogs</h1>
            <Blogs />
            <Footer/>
        </>
    );
};

export default Homepage;