import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/user/login`, user, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            });
            navigate("/");
            toast.success(res.data.message);
            dispatch(setAuthUser(res.data));
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-2xl shadow-2xl">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-lg text-gray-400">Login to ChateZone</p>
                </div>
                <form onSubmit={onSubmitHandler} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Username</span>
                        </label>
                        <input
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            type="text"
                            placeholder="Enter your username"
                            className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Password</span>
                        </label>
                        <input
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary w-full text-lg">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/register" className="link link-hover text-blue-400">
                        Sign up here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
