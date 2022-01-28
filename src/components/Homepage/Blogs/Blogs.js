import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
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

    // reversing the array to get the most recently approved
    const lastToFirst = [...approvedBlogs].reverse();

    // filtering the top rated blogs
    const topBlogs = approvedBlogs.filter((experience) => parseInt(experience.rating) === 5);
    // console.log(topBlogs);

    return (
        <div className="m-5">
            {
                loading && <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            }
            {/* main page */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
                {/* all blogs */}
               <div class="p-10 grid col-span-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">

                {
                    lastToFirst.map(experience => <SingleBlog key={ experience._id} experience={experience} />)
                }
                </div>
                {/* top rated blog side bar */}
                <div>
                    <h1 className="text-3xl text-center text-gray-700 font-bold py-2">Top Rated Blogs</h1>
                    <SideBar blogs={topBlogs} />
                    
                </div>
                {/* end of top rated blog side bar */}
            </div>

            {/* pagination section */}
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