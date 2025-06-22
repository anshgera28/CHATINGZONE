import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useGetOtherUsers from "../hooks/GetOtherUsers";
import OtherUser from "./OtherUser";

const OtherUsers = ({ onSelectUser, selectedUser }) => {
    // Fetch other users
    useGetOtherUsers();
    
    // Get users from Redux store
    const { otherUsers } = useSelector(store => store.user);
    const { onlineUsers = [] } = useSelector(store => store.socket);

    // Add online status to each user
    const usersWithStatus = otherUsers?.map(user => ({
        ...user,
        isOnline: onlineUsers.includes(user._id?.toString())
    })) || [];

    const handleUserClick = (user) => {
        if (typeof onSelectUser === 'function') {
            onSelectUser(user);
        }
    };

    if (!usersWithStatus.length) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-gray-400">No users found</p>
            </div>
        );
    }

    return (
        <div className="h-full overflow-y-auto p-2 bg-gray-900">
            <div className="p-4 border-b border-gray-800">
                <h2 className="text-xl font-bold text-white">Messages</h2>
                <p className="text-sm text-gray-400">
                    {usersWithStatus.filter(u => u.isOnline).length} online
                </p>
            </div>
            <div className="space-y-1 p-2">
                {usersWithStatus.map((user) => (
                    <OtherUser
                        key={user._id}
                        user={user}
                        isOnline={user.isOnline}
                        isSelected={selectedUser?._id === user._id}
                        onSelectUser={handleUserClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default OtherUsers;
