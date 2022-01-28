import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    
    console.log(blog);
    useEffect(() => {
        fetch(`https://vast-thicket-90925.herokuapp.com/userExperiences/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                console.log(data);
                setLoading(false);
        });
    }, [])
    
    const { name, address,location, rating, experience, image,title,category,cost, date} = blog;
    return (
        <>
        <Navigation/>
            {
                loading &&  <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            }
            <div class="md:w-3/4 mx-auto rounded">
                {
                    title && <h1 className="text-5xl font-bold text-center p-3 mb-5">{ title}</h1>
            }
            <img class="mx-auto w-75 h-96 object-cover" src={image} alt=""/>
            <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{address}</div>
                    <p class="text-gray-700 text-base">
                        by <span className='font-bold'>{name}</span></p>
                    
                    <div className="px-0 py-4">
                        <h1 className="font-bold">{address || location}</h1>
                        <p className="py-2">Travelled on : { date}</p>
                    </div>     
                    {/* rating */}
               <div className="px-0 py-4">
                <Rating
                    initialRating={ rating }
                    emptySymbol='far fa-star '
                    fullSymbol='text-yellow-500 fas fa-star'
                    readonly
                />
                </div>
                    
                    <p class="text-gray-700 text-base">
                        {experience}
                </p>
                </div>
                { cost &&
                    <div className="px-6 py-4">
                        <p className="text-2xl">Estimated travel cost for one person : <span className='font-bold'>${ cost}</span></p>
                    </div>
                }

                <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{category}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{name}</span>
            </div>
            </div>  
            <Footer/>
        </>
    );
};

export default BlogDetail;