import React, { useEffect, useState } from 'react';
import "./MakeAdmin.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e=>{
        setEmail(e.target.value);
    }
    const handleMakeAdmin =(e)=>{
        console.log('clicked');
        const user = { email };
        // console.log(user);
        fetch('http://localhost:5000/users/admin', {
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
        <div className="make-admin-container">
        <h2 className="text-3xl" style={{color: '#C8C8C8'}}>Make Admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                    onBlur={handleOnBlur}
                    type="email"
                      />
                </div>
                {
                success && (
                    <div class="alert alert-success" role="alert">
                        Made Admin Successfully!
                    </div>
                )
            }
                <button className="bg-zinc-50 px-2 py-2 rounded-full">Make Admin</button>
            </form>

        </div>
        </div>

    );
};

export default MakeAdmin;