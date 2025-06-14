import React from "react";

const Signup = () => {
    return (
        <div className="min-w-96 max-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
                <h1 className="text-2xl font-bold text-center text-black-300">Signup</h1>
                <form action="">
                    <div className="">
                        <label className="label p-2">
                        <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                        <span className="text-base label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                        <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="input input-bordered w-full h-10" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup