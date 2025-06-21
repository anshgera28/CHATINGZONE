import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [input, setInput] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckboxChange = (gender) => {
        setInput({ ...input, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/user/register`, input, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            // No auto-login after signup, let user login manually
            toast.success(res.data.message);
            navigate("/login");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-2xl shadow-2xl">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">
                        Create an Account
                    </h1>
                    <p className="mt-2 text-lg text-gray-400">Join ChateZone Today</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full bg-gray-700 text-white"
                            value={input.fullName}
                            onChange={(e) => setInput({ ...input, fullName: e.target.value })}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Choose a username"
                            className="input input-bordered w-full bg-gray-700 text-white"
                            value={input.username}
                            onChange={(e) => setInput({ ...input, username: e.target.value })}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="input input-bordered w-full bg-gray-700 text-white"
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="input input-bordered w-full bg-gray-700 text-white"
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Gender</span>
                        </label>
                        <div className="flex items-center space-x-4">
                            <label className="label cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    className="radio radio-primary"
                                    checked={input.gender === "male"}
                                    onChange={() => handleCheckboxChange("male")}
                                />
                                <span className="label-text text-gray-300 ml-2">Male</span>
                            </label>
                            <label className="label cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    className="radio radio-primary"
                                    checked={input.gender === "female"}
                                    onChange={() => handleCheckboxChange("female")}
                                />
                                <span className="label-text text-gray-300 ml-2">Female</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary w-full text-lg" disabled={loading}>
                            {loading ? "Creating..." : "Sign Up"}
                        </button>
                    </div>
                </form>
                <div className="text-center text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="link link-hover text-blue-400">
                        Login here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
