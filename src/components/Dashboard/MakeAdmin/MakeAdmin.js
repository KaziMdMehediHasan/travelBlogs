import React, { useEffect, useState } from 'react';
import "./MakeAdmin.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    // capturting the data from the form
    const handleOnBlur = e=>{
        setEmail(e.target.value);
    }
    const handleMakeAdmin =(e)=>{
        console.log('clicked');
        const user = { email };
        // console.log(user);
        fetch('https://vast-thicket-90925.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                console.log(data);
                setSuccess(true);
            }
            
        })
        e.preventDefault();
    }

    // animation on scroll
    // useEffect(() =>{
    //     Aos.init({duration : 1000});
    //   },[]);

    return (
        <div className="make-admin-parent">
        <div className="make-admin-container shadow-lg bg-slate-100">
        <h2 className="text-4xl my-3">Make Admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <div className="mb-3">
                    <input
                     className='py-2 rounded-md border-2 w-full'       
                    onBlur={handleOnBlur}
                            type="email"
                            placeholder=" Enter the email address"
                      />
                </div>
                {
                success && (
                    <div class="alert alert-success" role="alert">
                        Made Admin Successfully!
                    </div>
                )
            }
                <div className="w-full flex justify-center items-center">
                    <button className="bg-green-200 hover:bg-green-400 px-2 py-2 rounded-full">Make Admin</button>      
               </div>
            </form>

        </div>
        </div>

    );
};

export default MakeAdmin;