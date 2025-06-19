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
//                 <divhttp://localhost:8080/api/v1/message/684a9e21c66b6ce6403e8f54 className="avatar online">
//                     <div className="w-12 h-12 rounded-full overflow-hidden">
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
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";



const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const { selectedUser }  = useSelector(store => store.user);
  
    const selectedUserHandler = (user) => {
        console.log(user);
        dispatch(setSelectedUser(user));
      
    };

    return (
        <div
            onClick={() => selectedUserHandler(user)}
            className={`${selectedUser?._id === user?._id ? 'bg-gray-100 dark:bg-blue-400' : ''} p-2 hover:bg-gray-100 dark:hover:bg-blue-400 opacity-80 rounded-lg transition duration-150 cursor-pointer`}
        >
            <div className="flex items-center gap-4">
                <div className="avatar online">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                            src={user?.profilePhoto}
                            alt="User"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                        {user.fullName}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1"></div>
        </div>
    );
};

export default OtherUser;
