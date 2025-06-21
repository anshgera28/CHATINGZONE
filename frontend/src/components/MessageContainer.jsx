import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
    const { selectedUser } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(setSelectedUser(null));
    };

    return (
        <div className="w-2/3 flex flex-col bg-gray-900">
            {selectedUser ? (
                <>
                    <div className="flex items-center gap-4 px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <button onClick={handleBack} className="btn btn-ghost btn-circle lg:hidden">
                            <IoIosArrowBack size={24} className="text-white"/>
                        </button>
                        <div className="avatar online">
                            <div className="w-12 h-12 rounded-full ring-2 ring-offset-2 ring-offset-gray-800 ring-green-500">
                                <img src={selectedUser?.profilePhoto} alt="User profile" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-white">{selectedUser?.fullName}</h2>
                            <span className="text-sm text-green-400">Online</span>
                        </div>
                    </div>
                    <Messages />
                    <SendInput />
                </>
            ) : (
                <div className='flex-1 flex flex-col justify-center items-center text-center p-4'>
                    <h1 className='text-5xl text-white font-extrabold'>Hi, User!</h1>
                    <p className='text-2xl text-gray-400 mt-2'>Welcome to ChateZone</p>
                    <p className="mt-6 text-lg text-gray-500">Select a user from the sidebar to start a conversation.</p>
                </div>
            )}
        </div>
    );
};

export default MessageContainer;

// second ui



// import React from "react";

// const MessageContainer = () => {
//     return (
//         <div className="flex-1 flex flex-col justify-between bg-white/10 backdrop-blur-lg p-4 overflow-y-auto rounded-lg shadow-inner space-y-4">
//             {/* Example Message - Received */}
//             <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-full overflow-hidden">
//                     <img
//                         src="https://imgs.search.brave.com/OjwM7EAQp-hWf7n3nI3YIsiAkVIWQkXFo0FdeVR3aII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2Nvb2wtbmVv/bi1ob29kaWUtcHJv/ZmlsZS1waWN0dXJl/LXZ0NHc1NGZ4cnZl/bnlkdnUud2VicA"
//                         alt="User"
//                         className="object-cover w-full h-full"
//                     />
//                 </div>
//                 <div className="bg-white/30 text-sm text-gray-900 dark:text-white p-3 rounded-xl max-w-xs backdrop-blur-md">
//                     <p>Hey, how are you doing?</p>
//                 </div>
//             </div>

//             {/* Example Message - Sent */}
//             <div className="flex justify-end">
//                 <div className="bg-blue-500/60 text-sm text-white p-3 rounded-xl max-w-xs shadow-md">
//                     <p>All good! Working on a project. You?</p>
//                 </div>
//             </div>

//             {/* Example Message - Received */}
//             <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-full overflow-hidden">
//                     <img
//                         src="https://imgs.search.brave.com/OjwM7EAQp-hWf7n3nI3YIsiAkVIWQkXFo0FdeVR3aII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2Nvb2wtbmVv/bi1ob29kaWUtcHJv/ZmlsZS1waWN0dXJl/LXZ0NHc1NGZ4cnZl/bnlkdnUud2VicA"
//                         alt="User"
//                         className="object-cover w-full h-full"
//                     />
//                 </div>
//                 <div className="bg-white/30 text-sm text-gray-900 dark:text-white p-3 rounded-xl max-w-xs backdrop-blur-md">
//                     <p>Nice! Let's catch up later?</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MessageContainer;
