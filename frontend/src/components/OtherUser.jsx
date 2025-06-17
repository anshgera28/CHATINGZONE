import React from "react";

const OtherUser = () => {
    return (
        <div className="p-2 hover:bg-gray-100 dark:hover:bg-blue-400 opacity-80 rounded-lg transition duration-150 cursor-pointer">
            <div className="flex items-center gap-4">
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
            <div className="divider my-0 py-0 h-1"></div>
        </div>
    )
}

export default OtherUser