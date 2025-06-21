import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import Login from './components/login'
import Signup from './components/Signup'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import io from 'socket.io-client'
import { useState } from 'react'



const router = createBrowserRouter([
  {
    path: "",
    element: <Homepage/>,
  },
  {
    path: "register",
    element: <Signup/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
]);

function App() {
  const [socket, setSocket] = useState(null);
  const {authUser} = useSelector(store => store.user);
  useEffect(() => {
    if(authUser){
      const socket = io("http://localhost:8080", {
        
      });
      setSocket(socket);
    }
  }, [authUser])
  return (
    <div className="p-4 h-screen items-center flex justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
