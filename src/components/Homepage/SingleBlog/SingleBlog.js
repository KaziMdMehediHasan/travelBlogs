import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleBlog = (props) => {
    // console.log(props.experience);
    const {location,address, date, name, rating, image, experience, _id,status,category,cost,title} = props.experience;
    return (
        <>
            <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt=""/>
                <div className="px-6 py-4">
                    {title && <h1 className="text-3xl mb-2">{ title}</h1>}
                    <div className="font-bold text-xl mb-2">{location || address}</div>
                    <p className="text-gray-700 text-base">
                        {experience.slice(0,200)}....
                </p>
                </div>
                <div className="px-6 py-4">
                <Rating
                    initialRating={ rating }
                    emptySymbol='far fa-star '
                    fullSymbol='text-yellow-500 fas fa-star'
                    readonly
                />
                </div>

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{address}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{name}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${category}` ||"#category"}</span>
                </div>
                <div className="px-6 py-4">
                    <button className="bg-amber-200 hover:bg-amber-500 text-neutral-800 font-bold py-2 px-4 rounded-full"><Link to={`/blogDetail/${_id}`}>See Details</Link>
                    </button>
                </div>

            </div>  
        </>
    );
};

export default SingleBlog;