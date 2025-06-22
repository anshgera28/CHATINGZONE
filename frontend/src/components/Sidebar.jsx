import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLogOut } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setOtherUsers } from "../redux/userSlice.js";
import OtherUsers from "./OtherUsers";



const Sidebar = () => {
    const [search, setSearch] = useState("");
    const { otherUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
        } catch (error) {
            toast.error("Logout failed");
        }
    };
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found");
        }
    }

    return (
        <div className="w-1/3 border-r border-gray-700 flex flex-col bg-gray-800 p-4">
            <div className="flex-shrink-0 mb-4">
                <form onSubmit={searchSubmitHandler} className="flex items-center gap-2">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input input-bordered rounded-full w-full bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Search users..."
                    />
                    <button type="submit" className="btn btn-circle btn-ghost">
                        <FiSearch className="text-white text-2xl" />
                    </button>
                </form>
            </div>

            <div className="divider px-3 before:bg-gray-700 after:bg-gray-700"></div>

            <div className="flex-grow overflow-auto">
                <OtherUsers onSelectUser={() => {}} />
            </div>

            <div className="mt-4 flex-shrink-0">
                <button
                    onClick={logoutHandler}
                    className="btn btn-ghost w-full flex items-center justify-start gap-2 text-white hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                    <BiLogOut size={24} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
