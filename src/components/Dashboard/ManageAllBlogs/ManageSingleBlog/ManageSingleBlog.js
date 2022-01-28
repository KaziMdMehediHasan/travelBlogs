import React from 'react';
import { Link } from 'react-router-dom';

const ManageSingleBlog = (props) => {
    //  console.log(props.experience);
    const { address, date, name, rating, image, experience, _id, status,location } = props.experience;
    
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

    // blog approval

    const handleApproval = (id) => {
        console.log(id);
        const experience = { id };
        fetch('https://vast-thicket-90925.herokuapp.com/experiences/update', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(experience)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Post Approved Successfully!');
                }
                console.log(data);
            });
    }
    return (
        <>
            <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src={image} alt=""/>
            <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{ address || location}</div>
                    <p class="text-gray-700 text-base">
                        {experience.slice(0,200)}....
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{address}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{name}</span>
                </div>
                {/* status of the blog post */}
                <span className={ status === 'pending' ?"bg-yellow-200 hover:bg-yellow-500 text-neutral-800 font-bold py-2 px-4 rounded-full" : 'bg-green-200 hover:bg-green-500 text-neutral-800 font-bold py-2 px-4 rounded-full'}>
                    {status}
                </span>
                {
                    status !== 'approved' &&
                        <button
                        onClick={()=> handleApproval(_id)}
                        className="bg-green-200 hover:bg-green-500 text-neutral-800 font-bold py-2 px-4 rounded-full">Approve
                        </button>                  
                }
                <button
                    onClick={() => {
                        if (window.confirm('Sure?')) {
                            handleDelete(_id);
                        }
                    }}
                    className="bg-red-200 hover:bg-red-500 text-neutral-800 font-bold py-2 px-4 rounded-full">Delete</button>
            </div>  
        </>
    );
};

export default ManageSingleBlog;