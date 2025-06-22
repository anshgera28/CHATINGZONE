import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessage, setTypingStatus } from '../redux/messageSlice';

const ChatWindow = ({ selectedUser, socket }) => {
    const [message, setMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const typingTimeoutRef = useRef(null);
    
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.user);
    const { conversations } = useSelector(store => store.message);
    const { typingUsers } = useSelector(store => store.message);
    
    const conversationId = selectedUser?._id;
    const messages = conversations[conversationId] || [];
    const isUserTyping = typingUsers[conversationId]?.includes(selectedUser?._id);

    // Set up socket event listeners
    useEffect(() => {
        if (!socket) return;

        const handleReceiveMessage = (messageData) => {
            dispatch(addNewMessage({
                conversationId: messageData.senderId === user._id ? messageData.receiverId : messageData.senderId,
                message: messageData
            }));
        };

        const handleUserTyping = ({ senderId }) => {
            if (senderId === selectedUser?._id) {
                dispatch(setTypingStatus({
                    conversationId: senderId,
                    userId: senderId,
                    isTyping: true
                }));
            }
        };

        const handleUserStoppedTyping = ({ senderId }) => {
            if (senderId === selectedUser?._id) {
                dispatch(setTypingStatus({
                    conversationId: senderId,
                    userId: senderId,
                    isTyping: false
                }));
            }
        };

        // Add event listeners
        socket.on('receiveMessage', handleReceiveMessage);
        socket.on('userTyping', handleUserTyping);
        socket.on('userStoppedTyping', handleUserStoppedTyping);

        // Clean up event listeners
        return () => {
            socket.off('receiveMessage', handleReceiveMessage);
            socket.off('userTyping', handleUserTyping);
            socket.off('userStoppedTyping', handleUserStoppedTyping);
        };
    }, [socket, user?._id, selectedUser?._id, dispatch]);

    useEffect(() => {
        // Scroll to bottom when messages change
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!message.trim() || !selectedUser || !socket) return;

        const messageData = {
            senderId: user._id,
            receiverId: selectedUser._id,
            text: message,
            timestamp: new Date().toISOString(),
            read: false
        };

        // Emit the message through socket
        socket.emit('sendMessage', messageData);
        
        // Add message to local state
        dispatch(addNewMessage({
            conversationId: selectedUser._id,
            message: messageData
        }));

        // Clear input
        setMessage('');
    };

    const handleTyping = () => {
        if (!isTyping && socket && selectedUser) {
            setIsTyping(true);
            socket.emit('typing', {
                receiverId: selectedUser._id,
                senderId: user._id
            });
        }
        
        // Clear previous timeout
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        // Set a timeout to stop typing indicator after 2 seconds of inactivity
        typingTimeoutRef.current = setTimeout(() => {
            if (socket && selectedUser) {
                setIsTyping(false);
                socket.emit('stopTyping', {
                    receiverId: selectedUser._id,
                    senderId: user._id
                });
            }
        }, 2000);
    };

    if (!selectedUser) {
        return (
            <div className="flex-1 flex items-center justify-center bg-gray-800 text-gray-400">
                <p>Select a user to start chatting</p>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col bg-gray-800">
            {/* Chat header */}
            <div className="p-4 border-b border-gray-700 flex items-center">
                <div className="flex items-center">
                    <div className="relative">
                        <img
                            src={selectedUser.profilePhoto}
                            alt={selectedUser.fullName}
                            className="w-10 h-10 rounded-full"
                        />
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${
                            selectedUser.isOnline ? 'bg-green-500' : 'bg-gray-500'
                        }`}></div>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-white font-semibold">{selectedUser.fullName}</h3>
                        <p className="text-xs text-gray-400">
                            {isUserTyping ? 'typing...' : (selectedUser.isOnline ? 'Online' : 'Offline')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.senderId === user._id ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                msg.senderId === user._id
                                    ? 'bg-blue-600 text-white rounded-br-none'
                                    : 'bg-gray-700 text-white rounded-bl-none'
                            }`}
                        >
                            <p>{msg.text}</p>
                            <p className="text-xs opacity-70 text-right">
                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Message input */}
            <div className="p-4 border-t border-gray-700">
                <form onSubmit={handleSendMessage} className="flex items-center">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            handleTyping();
                        }}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatWindow;
