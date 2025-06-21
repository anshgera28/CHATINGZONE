// import React from "react";
// import Sidebar from "./Sidebar";
// import MessageContainer from "./MessageContainer";

// const Homepage = () => {
//     return (
//         <div className="flexsm:h-[450px] md:h-[600px] rounded-lg shadow-md bg-gray-400 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 bg-clip-padding backdrop-blur-lg bg-opacity-0">
//             <Sidebar />
//             <MessageContainer />
//         </div>
//     )
// }

// export default Homepage

import React from "react";
import MessageContainer from "./MessageContainer";
import Sidebar from "./Sidebar";

const Homepage = () => {
    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
            <div className="flex h-[90vh] w-[90vw] rounded-2xl shadow-2xl bg-gray-800 bg-opacity-90 border border-gray-700 backdrop-blur-md overflow-hidden">
                <Sidebar />
                <MessageContainer />
            </div>
        </div>
    );
};

export default Homepage;
