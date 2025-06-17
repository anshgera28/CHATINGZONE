// import React from "react";

// const OtherUsers = () => {
//     return (
//         <div>
//             <div className="flex items-center gap-2">
//                 <div className="avtar online">
//                     <div className="w-10 rounded-lg ">
//                         <img src="https://imgs.search.brave.com/OjwM7EAQp-hWf7n3nI3YIsiAkVIWQkXFo0FdeVR3aII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2Nvb2wtbmVv/bi1ob29kaWUtcHJv/ZmlsZS1waWN0dXJl/LXZ0NHc1NGZ4cnZl/bnlkdnUud2VicA" alt="" />
//                     </div>
//                     <div className="flex flex-col flex-1 ">
//                         <div className="flex justify-between items-center gap-2 flex-1">
//                             <p>John Doe</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>

//             </div>
//         </div>
//     )
// }

// export default OtherUsers
import React from "react";
import OtherUser from "./OtherUser";

const OtherUsers = () => {
    return (
        <div className="overflow-auto">
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
        </div>
    );
};

export default OtherUsers;
