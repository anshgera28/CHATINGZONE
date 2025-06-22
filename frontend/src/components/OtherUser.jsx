// import React from "react";
// import { useDispatch } from "react-redux";
// import { setSelectedUser } from "../redux/userSlice";

// const OtherUser = ({user}) => {
//     const dispatch = useDispatch();
//     const selectedUserHandler = (user) => {
//         dispatch(setSelectedUser(user));
//     }
//     return (
//         <div onClick={() => selectedUserHandler(user)} className="p-2 hover:bg-gray-100 dark:hover:bg-blue-400 opacity-80 rounded-lg transition duration-150 cursor-pointer">
//             <div className="flex items-center gap-4">
//                 <div className="avatar online">
//                     <div className="w-12 h-12 rounded-full">
//                         <img
//                             src={user?.profilePhoto}
//                             alt="User"
//                             className="object-cover w-full h-full"
//                         />
//                     </div>
//                 </div>
//                 <div className="flex-1">
//                     <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{user.fullName}</p>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
//                 </div>
//             </div>
//             <div className="divider my-0 py-0 h-1"></div>
//         </div>
//     )
// }

// export default OtherUser

import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = ({ user, isOnline = false, isSelected = false, onSelectUser }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedUser(user));
        if (onSelectUser && typeof onSelectUser === 'function') {
            onSelectUser(user);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`flex items-center p-4 transition-all duration-200 cursor-pointer ${
                isSelected 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500' 
                    : 'bg-gray-800 hover:bg-gray-700 border-l-4 border-transparent hover:border-blue-500'
            } rounded-lg mx-2 my-1 shadow-sm`}
        >
            <div className="relative">
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${
                    isSelected ? 'border-white' : 'border-gray-600'
                }`}>
                    <img
                        src={user?.profilePhoto}
                        alt="User Avatar"
                        className="object-cover w-full h-full"
                    />
                </div>
                {isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                )}
            </div>
            <div className="ml-4 flex-1">
                <p className={`text-lg font-semibold ${isSelected ? 'text-white' : 'text-white'}`}>
                    {user.fullName}
                </p>
                <p className={`text-sm ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>
                    {isOnline ? 'Online' : 'Offline'}
                </p>
            </div>
            {isSelected && (
                <div className="w-1 h-8 bg-white rounded-full"></div>
            )}
        </div>
    );
};

export default OtherUser;
