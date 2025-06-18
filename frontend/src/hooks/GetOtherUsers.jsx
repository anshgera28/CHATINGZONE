// import { useEffect } from "react";
// import axios from "axios";




// const useGetOtherUsers = () => {

    
//     useEffect(() => {
        
//         const fetchOtherUsers = async () => {
//             try {
//                 axios.defaults.withCredentials = true;
//                 const res = await axios.get(`http://localhost:8080/api/v1/user/`);
//                 console.log(res.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchOtherUsers();
//     }, [])
// }

// export default useGetOtherUsers
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
    const dispatch = useDispatch();


  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`http://localhost:8080/api/v1/user/`);
        console.log(res.data);
       dispatch(setOtherUsers(res.data));
        // setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOtherUsers();
  }, []);

 
};

export default useGetOtherUsers;


