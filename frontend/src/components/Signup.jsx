import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const [user, setUser] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });
    const handleCheckbox = (gender) => {
        setUser({...user, gender: gender})
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: "",
        })
    }
    
    return (
        <div className="min-w-96 max-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
                <h1 className="text-2xl font-bold text-center text-black-300">Signup</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="">
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input value={user.fullName} onChange={(e) => setUser({...user, fullName: e.target.value})} type="text" placeholder="Full Name" className="input input-bordered w-full h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} type="text" placeholder="Username" className="input input-bordered w-full h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password" placeholder="Password" className="input input-bordered w-full h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input value={user.confirmPassword} onChange={(e) => setUser({...user, confirmPassword: e.target.value})} type="password" placeholder="Confirm Password" className="input input-bordered w-full h-10" />
                    </div>
                    <div className="flex items-center my-4">
                        <div>
                            <p>Male</p>
                            <input type="checkbox" checked={user.gender === "male"} className="checkbox mx-2" onChange={(e) => handleCheckbox("male")} />
                        </div>
                        <div>
                            <p>Female</p>
                            <input type="checkbox" checked={user.gender === "female"} className="checkbox mx-2" onChange={(e) => handleCheckbox("female")} />
                        </div>
                    </div>
                    <Link to="/login">
                        Already have an account?
                    </Link>
                    <div>
                        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup