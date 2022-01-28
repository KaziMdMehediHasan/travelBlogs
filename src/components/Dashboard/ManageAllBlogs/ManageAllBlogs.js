import React, { useEffect, useState } from 'react';
import ManageSingleBlog from './ManageSingleBlog/ManageSingleBlog';

const ManageAllBlogs = () => {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://vast-thicket-90925.herokuapp.com/experiences`)
            .then(res => res.json())
            .then(data => {
                setExperiences(data.experiences);
                // console.log(data)
                setLoading(false);
        })
    },[experiences])
    return (
        <div className="m-5">
            {
                loading && <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            }
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">

                {
                    experiences.map(experience => <ManageSingleBlog key={ experience._id} experience={experience} />)
                }
            </div>
</div>
    );
};

export default ManageAllBlogs;