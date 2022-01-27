import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import "./Blogs.css";

const Blogs = () => {
    const [experiences, setExperiences] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://vast-thicket-90925.herokuapp.com/experiences?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setExperiences(data.experiences);
                // console.log(data);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
                setLoading(false);
        })
    }, [page])
    
    const approvedBlogs = experiences.filter((experience) => experience.status === 'approved');
    console.log(approvedBlogs);
    return (
        <div className="m-5">
            {
                loading && <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            }
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

                {
                    approvedBlogs.map(experience => <SingleBlog key={ experience._id} experience={experience} />)
                }
            </div>
             <div className='pagination'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            onClick={() => setPage(number)}
                            key={number} className={number === page ? 'bg-emerald-500 text-black mx-2 px-4 py-2 rounded-full' :
                            'bg-gray-700 text-white mx-2 px-4 py-2 rounded-full'}>{number + 1}</button>)
                    }
            </div>
</div>
    );
};

export default Blogs;