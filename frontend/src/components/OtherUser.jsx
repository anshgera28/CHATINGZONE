import React from "react";

const OtherUser = (props) => {
    const user = props.user;
    return (
        <div className="p-2 hover:bg-gray-100 dark:hover:bg-blue-400 opacity-80 rounded-lg transition duration-150 cursor-pointer">
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
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{user.fullName}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1"></div>
        </div>
    )
}

export default OtherUser