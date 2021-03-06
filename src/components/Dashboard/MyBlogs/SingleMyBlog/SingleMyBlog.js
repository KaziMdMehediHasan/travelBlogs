import React from 'react';
import Rating from 'react-rating';

const SingleMyBlog = (props) => {
    const { address, date, name, rating, image, experience, _id, status, category,location } = props.experience;
    
        // blog deletation
    const handleDelete = (id) => {
        // console.log(id);
        fetch(`https://vast-thicket-90925.herokuapp.com/experiences/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                alert('Post Deleted Successfully!');
                }
                // console.log(data);
        })
    }
    return (
        <>
            <div class="rounded overflow-hidden shadow-lg">
            <img class="object-cover h-[15rem] w-full" src={image} alt=""/>
            <div className="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{ address || location}</div>
                    <p class="text-gray-700 text-base">
                        {experience.slice(0,50)}....
                </p>
                </div>
                <div className="px-6">
                <Rating
                    initialRating={ rating }
                    emptySymbol='far fa-star '
                    fullSymbol='text-yellow-500 fas fa-star'
                    readonly
                />
                </div>

            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{address}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{name}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#category</span>
                </div>
                <span className={ status === 'pending' ?"bg-yellow-200 hover:bg-yellow-500 text-neutral-800 font-bold py-2 px-4 rounded-full ml-5" : 'bg-green-200 hover:bg-green-500 text-neutral-800 font-bold py-2 px-4 rounded-full ml-5'}>
                    {status}
                </span>
                <button
                    onClick={() => {
                        if (window.confirm('Sure?')) {
                            handleDelete(_id);
                        }
                    }}
                    className="bg-red-200 hover:bg-red-500 text-neutral-800 font-bold py-2 px-4 rounded-full mb-5">Delete
                </button>
            </div>  
        </>
    );
};

export default SingleMyBlog;