import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

export const useGetMessages = () => {
    const { selectedUser } = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMessages = async () => {
            if (!selectedUser) return; // Don't fetch if no user is selected
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`);
                console.log("Response from server:", res.data);
                dispatch(setMessages(res.data));
            } catch (error) {
                console.error(error);
            }
        };
        fetchMessages();
    }, [selectedUser, dispatch]) // Re-run the effect when selectedUser changes
}
