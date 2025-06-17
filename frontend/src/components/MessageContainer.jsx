import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";


const MessageContainer = () => {
    return (
        <div className="md:min-w-[550px] flex flex-col">
        <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
            <div className="avatar online">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                        src="https://imgs.search.brave.com/OjwM7EAQp-hWf7n3nI3YIsiAkVIWQkXFo0FdeVR3aII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2Nvb2wtbmVv/bi1ob29kaWUtcHJv/ZmlsZS1waWN0dXJl/LXZ0NHc1NGZ4cnZl/bnlkdnUud2VicA"
                        alt="User"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
            </div>
        </div>
        <Messages />
        <SendInput />
        </div>
    )
}

export default MessageContainer

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

