import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import Login from './components/login'
import Signup from './components/Signup'


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
  return (
    <div className="p-4 h-screen items-center flex justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
