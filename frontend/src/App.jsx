import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Login from './components/login';
import Signup from './components/Signup';
import SocketClient from './components/SocketClient';
import ChatWindow from './components/ChatWindow';
import OtherUsers from './components/OtherUsers';

// Create a wrapper component for authenticated routes
const AuthenticatedLayout = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { authUser } = useSelector(store => store.user);
  const location = useLocation();

  // Reset selected user when location changes
  useEffect(() => {
    setSelectedUser(null);
  }, [location.pathname]);

  if (!authUser) {
    return children;
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-gray-800 flex flex-col bg-gray-900">
        {children}
        <div className="flex-1 overflow-hidden">
          <OtherUsers 
            onSelectUser={setSelectedUser} 
            selectedUser={selectedUser} 
          />
        </div>
      </div>
      
      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-800">
        <ChatWindow selectedUser={selectedUser} />
      </div>
      
      {/* Socket Client */}
      <SocketClient />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <AuthenticatedLayout>
        <Homepage />
      </AuthenticatedLayout>
    ),
  },
  {
    path: "register",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
