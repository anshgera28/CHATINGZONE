import React from "react";
import { FiSearch } from "react-icons/fi";
import OtherUsers from "./OtherUsers";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 flex flex-col">
            <form action="" className="flex items-center gap-2 outline-none">
                <input className="input input-bordered rounded-md outline-none" type="text"
                    placeholder="Search" />
                <button type="submit" className="btn btn-primary outline-none">
                    <FiSearch className="text-gray-500 text-2xl outline-none" />
                </button>
            </form>
            <div className="divider px-3"></div>
            <OtherUsers />
            <div className="mt-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-400/20 to-blue-600/20 backdrop-blur-md border border-white/20 rounded-md shadow-md hover:bg-blue-400/30 transition-all duration-300">
                    Logout
                </button>
            </div>

        </div>
    )
}

export default Sidebar
