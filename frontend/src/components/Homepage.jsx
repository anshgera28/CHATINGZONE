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
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

const Homepage = () => {
    return (
        <div className="flex h-[500px] sm:h-[600px] md:h-[700px] rounded-xl shadow-xl bg-gray-200 bg-opacity-20 border border-gray-300 backdrop-blur-md overflow-hidden">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Homepage;
