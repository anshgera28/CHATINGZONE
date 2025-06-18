// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// const Signup = () => {
//     const [user, setUser] = useState({
//         fullName: "",
//         username: "",
//         password: "",
//         confirmPassword: "",
//         gender: "",
//     });
//     const navigate = useNavigate();
//     const handleCheckbox = (gender) => {
//         setUser({ ...user, gender: gender })
//     }
//     const onSubmitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             console.log(user)
//             const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user, {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 withCredentials: true
//             });
//             if(res.data.success) {
//                 navigate("/Login");
//                 toast.success(res.data.message);
//             }
//             console.log(res)
//         } catch (error) {
//             toast.error(error.response.data.message);
//             console.log(error)
//         }
//         setUser({
//             fullName: "",
//             username: "",
//             password: "",
//             confirmPassword: "",
//             gender: "",
//         })
//     }

//     return (
//         <div className="min-w-96 max-auto ">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
//                 <h1 className="text-2xl font-bold text-center text-black-300">Signup</h1>
//                 <form onSubmit={onSubmitHandler}>
//                     <div className="">
//                         <label className="label p-2">
//                             <span className="text-base label-text">Full Name</span>
//                         </label>
//                         <input value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })} type="text" placeholder="Full Name" className="input input-bordered w-full h-10" />
//                     </div>
//                     <div className="">
//                         <label className="label p-2">
//                             <span className="text-base label-text">username</span>
//                         </label>
//                         <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" placeholder="Username" className="input input-bordered w-full h-10" />
//                     </div>
//                     <div className="">
//                         <label className="label p-2">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" placeholder="Password" className="input input-bordered w-full h-10" />
//                     </div>
//                     <div className="">
//                         <label className="label p-2">
//                             <span className="text-base label-text">Confirm Password</span>
//                         </label>
//                         <input value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} type="password" placeholder="Confirm Password" className="input input-bordered w-full h-10" />
//                     </div>
//                     <div className="flex items-center my-4">
//                         <div>
//                             <p>Male</p>
//                             <input type="checkbox" checked={user.gender === "male"} className="checkbox mx-2" onChange={(e) => handleCheckbox("male")} />
//                         </div>
//                         <div>
//                             <p>Female</p>
//                             <input type="checkbox" checked={user.gender === "female"} className="checkbox mx-2" onChange={(e) => handleCheckbox("female")} />
//                         </div>
//                     </div>
//                     <Link to="/login">
//                         Already have an account?
//                     </Link>
//                     <div>
//                         <button type="submit" className="btn btn-primary w-full">Sign Up</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Signup = () => {
    const [user, setUser] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const navigate = useNavigate();

    const handleGenderChange = (gender) => {
        setUser({ ...user, gender });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:8080/api/v1/user/register",
                user,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Signup failed");
            console.error(error);
        }

        setUser({
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: "",
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Signup</h1>

                <form onSubmit={onSubmitHandler} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            value={user.fullName}
                            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            type="text"
                            placeholder="Username"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            value={user.confirmPassword}
                            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                            type="password"
                            placeholder="Confirm Password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Gender selection using radio buttons */}
                    <div className="my-4">
                        <span className="label-text mb-2 block">Gender</span>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={user.gender === "male"}
                                    onChange={(e) => handleGenderChange(e.target.value)}
                                    className="radio"
                                    required
                                />
                                <span>Male</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={user.gender === "female"}
                                    onChange={(e) => handleGenderChange(e.target.value)}
                                    className="radio"
                                />
                                <span>Female</span>
                            </label>
                        </div>
                    </div>

                    <div className="text-sm mb-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
