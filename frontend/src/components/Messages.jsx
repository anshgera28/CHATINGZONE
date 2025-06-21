import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useGetMessages } from "../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
    useGetMessages();
    const { messages } = useSelector(store => store.message);
    const lastMessageRef = useRef(null);

    useEffect(() => {
        // Scroll to the last message
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); // Dependency array ensures this runs when messages change

    return (
        <div className="px-4 flex-1 overflow-auto">
            {
                messages && messages.map((message, index) => {
                    // Determine if the current message is the last one
                    const isLastMessage = index === messages.length - 1;
                    return (
                        <div key={message._id} ref={isLastMessage ? lastMessageRef : null}>
                            <Message message={message}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Messages;
