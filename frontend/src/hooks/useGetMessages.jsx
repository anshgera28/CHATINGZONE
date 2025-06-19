import { useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const useGetMessages = () => {
    const { selectedUser } = useSelector(store => store.user);
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`);
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMessages();
    }, [])
}
