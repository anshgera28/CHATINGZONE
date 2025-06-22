import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { addNewMessage, setTypingStatus } from '../redux/messageSlice';
import {
    connectionError,
    setOnlineUsers,
    setSocket
} from '../redux/socketSlice';

const SOCKET_SERVER_URL = 'http://localhost:5000';

const SocketClient = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.user);
    const socketRef = useRef(null);

    useEffect(() => {
        if (!user?._id) return;

        // Initialize socket connection
        socketRef.current = io(SOCKET_SERVER_URL, {
            query: { userId: user._id.toString() },
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
            timeout: 5000,
            autoConnect: true,
            withCredentials: true
        });

        // Connection event handlers
        const onConnect = () => {
            console.log('Connected to socket server, socket ID:', socketRef.current?.id);
            dispatch(setSocket(socketRef.current));
            // isConnected is set to true in setSocket action
        };

        const onDisconnect = () => {
            console.log('Disconnected from socket server');
            // isConnected is set to false in setSocket action when socket is null
            dispatch(setSocket(null));
        };

        const onConnectError = (error) => {
            console.error('Socket connection error:', error);
            dispatch(connectionError('Connection error. Please refresh the page.'));
        };

        const onOnlineUsers = (users) => {
            console.log('Online users updated:', users);
            dispatch(setOnlineUsers(users));
        };

        const onReceiveMessage = (message) => {
            console.log('New message received:', message);
            dispatch(addNewMessage({
                conversationId: message.senderId,
                message: message
            }));
        };

        const onUserTyping = ({ senderId }) => {
            dispatch(setTypingStatus({
                conversationId: senderId,
                userId: senderId,
                isTyping: true
            }));
        };

        const onUserStoppedTyping = ({ senderId }) => {
            dispatch(setTypingStatus({
                conversationId: senderId,
                userId: senderId,
                isTyping: false
            }));
        };

        // Set up event listeners
        socketRef.current.on('connect', onConnect);
        socketRef.current.on('disconnect', onDisconnect);
        socketRef.current.on('connect_error', onConnectError);
        socketRef.current.on('getOnlineUsers', onOnlineUsers);
        socketRef.current.on('receiveMessage', onReceiveMessage);
        socketRef.current.on('userTyping', onUserTyping);
        socketRef.current.on('userStoppedTyping', onUserStoppedTyping);

        // Clean up on unmount
        return () => {
            if (socketRef.current) {
                console.log('Cleaning up socket connection');
                // Remove all event listeners
                socketRef.current.off('connect', onConnect);
                socketRef.current.off('disconnect', onDisconnect);
                socketRef.current.off('connect_error', onConnectError);
                socketRef.current.off('getOnlineUsers', onOnlineUsers);
                socketRef.current.off('receiveMessage', onReceiveMessage);
                socketRef.current.off('userTyping', onUserTyping);
                socketRef.current.off('userStoppedTyping', onUserStoppedTyping);

                // Disconnect the socket
                socketRef.current.disconnect();
                socketRef.current = null;

                // Reset socket state
                dispatch(setSocket(null));
            }
        };
    }, [user?._id, dispatch]);

    return null; // This component doesn't render anything
};

export default SocketClient;
