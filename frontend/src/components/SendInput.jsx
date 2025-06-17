import React from "react";
import { IoMdSend } from "react-icons/io";
const SendInput = () => {
    return (
        <form className="px-4 my-3">
            <div className="w-full relative">
                <input className="border text-sm rounded-lg block w-full bg-gray-700 text-white p-3 border-zinc-600 outline-none" type="text" placeholder="Type your message" />
                <button className="absolute flex inset-y-0  end-0 items-center">
                    <IoMdSend size={20} />
                </button>

            </div>
        </form>
    )
}

export default SendInput