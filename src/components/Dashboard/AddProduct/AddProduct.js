import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import "./AddProduct.css";

const AddProduct = () => {
  const { user } = useAuth();
  const [postSuccess, setPostSuccess] = useState(false);
  
    //default values in the form
    const preloadedValues = {
      name: 'Admin',
      email: user.email,
  };
  // react hook form function
    const { register, handleSubmit } = useForm({
      defaultValues: preloadedValues,
    });

  const onSubmit = (formData, e) => {
      
    const blogData = { ...formData };
      console.log(blogData);
      blogData.status = "approved"; 

        // send req to the server
    
      fetch('https://vast-thicket-90925.herokuapp.com/experiences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blogData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          setPostSuccess(true);
        }
      });
        e.target.reset();
    }

        // animation on scroll

        // useEffect(() =>{
        //   Aos.init({duration : 1000});
        // },[]);
    return (
        <div className="pb-5">
        <h1 className="text-center text-5xl font-bold p-5">Post a New Blog</h1>
        <div className="add-product-parent shadow-xl">
          <div>
            <form className="add-product-form" onSubmit={handleSubmit(onSubmit)}>
              <input className="my-3"
                {...register("name", { required: true })}
                placeholder="name *required"
              />

              <input className="my-3"
                {...register("title", { required: true })}
                placeholder="Blog Title *required"
              />

              <input className="my-3"
                {...register("location", { required: true })}
                placeholder="travel location *required"
              />

              <input className="my-3"
                {...register("category", { required: true })}
                placeholder="category *required"
              />

              <input className="my-3"
                {...register("cost", { required: true })}
                placeholder="overall travel cost for one person *required"
                type="number"
              />

              <input  className="my-3"
                {...register("email", { required: true })} placeholder="email *required" />

              <input  className="my-3"
                    {...register("date", { required: true })} placeholder="Travel Date *required" type="date" />

          <input className="my-3" 
                type="number"
                {...register("rating", { required: true, min: 1, max:5})} placeholder="Rate in number from 0 to 5 *required" />
    
              <textarea 
              className="my-3"
                {...register("experience",{ required: true })} placeholder="Share your experience *required" />

              <input className="my-3"
                {...register("image", { required: true })} placeholder="image url" />

              <input value="Post" className="my-3 bg-green-200 hover:bg-green-400 cursor-pointer" type="submit"/>
            </form>
          </div>
          {
                postSuccess &&
                <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
                        </div>
                    <div>
                        <p className="font-bold">Blog Submitted Successfully!</p>
                    </div>
                </div>
                </div>
            }
        </div>
      </div>
    );
};

export default AddProduct;