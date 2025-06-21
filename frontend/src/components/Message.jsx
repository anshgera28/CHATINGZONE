import React from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
    const { authUser } = useSelector(store => store.user);
    const fromMe = message?.senderId?._id === authUser?._id;

    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const bubbleClassName = fromMe ? "chat-bubble-primary" : "bg-gray-700 text-white";

    // The message object now contains the sender's profilePhoto directly
    const imgSrc = message?.senderId?.profilePhoto;

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="User avatar"
                        src={imgSrc || `https://api.dicebear.com/8.x/initials/svg?seed=${message?.senderId?.fullName}`}
                    />
                </div>
            </div>
            <div className={`chat-bubble ${bubbleClassName}`}>
                {message?.message}
            </div>
            <div className="chat-footer opacity-50">
                <time className="text-xs text-gray-400">
                    {new Date(message?.createdAt).toLocaleTimeString()}
                </time>
            </div>
        </div>
    );
};

export default Message;
