import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({
            username: "",
            password: "",
        });
      
        const onSubmitHandler = (e) => {
            e.preventDefault();
            console.log(user);
            setUser({
                username: "",
                password: "",
            })
        }
    return (
        <div className="min-w-96 max-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
                <h1 className="text-2xl font-bold text-center text-black-300">Login</h1>
                <form onSubmit={onSubmitHandler}>
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
                    {/* <div className="flex items-center my-4">
                        <div>
                            <p>Male</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" />
                        </div>
                        <div>
                            <p>Female</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" />
                        </div>
                    </div> */}
                    <Link to="/register">
                     Don't have an account?
                    </Link>
                    <div>
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login