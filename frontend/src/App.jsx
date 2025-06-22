import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import io from 'socket.io-client'
import './App.css'
import Homepage from './components/Homepage'
import Login from './components/login'
import Signup from './components/Signup'
import { setOnlineUsers, setSocket } from './redux/socketSlice'



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

const App = () => {
  const {authUser} = useSelector(store => store.user);
  const {socket} = useSelector(store => store.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if(authUser){
      const socket = io("http://localhost:8080", {
        query: {userId: authUser._id}
      });
      dispatch(setSocket(socket));

      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      })
      return () => {
        socket.close();
      }
    }else{
      if(socket){
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser])

  return (
    <div className="p-4 h-screen items-center flex justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
