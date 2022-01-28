import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SingleMyBlog from './SingleMyBlog/SingleMyBlog';

const MyBlogs = () => {
    const { user } = useAuth();
    const [experiences, setExperiences] = useState([]);
    const[loading, setLoading] = useState(true);
    
    useEffect(() => {
        const url = `https://vast-thicket-90925.herokuapp.com/experiences/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setExperiences(data);
                setLoading(false);
                // console.log(experiences);
            })
    }, [experiences])
    
    // console.log(experiences);
    return (
       <div className="m-5">
            {
                loading && <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            }
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">

                {
                    experiences.map(experience => <SingleMyBlog key={ experience._id} experience={experience} />)
                }
            </div>
</div>
    );
};

export default MyBlogs;