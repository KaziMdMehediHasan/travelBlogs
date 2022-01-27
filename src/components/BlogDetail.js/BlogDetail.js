import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

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
    
    const { name, address, rating, experience, image} = blog;
    return (
        <>
            {
                loading &&  <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            }
            <div class="rounded overflow-hidden shadow-lg">
            <img class="mx-auto w-75" src={image} alt=""/>
            <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{address}</div>
                    <p class="text-gray-700 text-base">
                        by <span className='font-bold'>{name}</span></p>
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
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{address}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{name}</span>

                </div>
            </div>  
        </>
    );
};

export default BlogDetail;