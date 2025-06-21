import axios from "axios";
import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const SendInput = () => {

    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user);
    const { messages } = useSelector(store => store.message);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        try {
            const res = await axios.post(
                `http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,
                { message },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            );
            dispatch(setMessages([...messages, res.data.newMessage]));
        } catch (error) {
            console.log(error);
        }
        setMessage("");
    }

    return (
        <form onSubmit={onSubmitHandler} className="px-4 my-3">
            <div className="w-full relative">
                <input
                    className="border text-sm rounded-lg block w-full bg-gray-700 text-white p-3 border-zinc-600 outline-none"
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="absolute flex inset-y-0 right-0 items-center pr-3">
                    <IoMdSend size={24} className="text-white" />
                </button>
            </div>
        </form>
    )
}

export default SendInput;
