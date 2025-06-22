import {Server} from "socket.io";
import http from "http";
import express from "express";


const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"], 
        methods: ["GET", "POST"],
    },
});

const userSocketMap = {}; // userId: socketId

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Add user to online list
    const userId = socket.handshake.query.userId;
    if (userId && userId !== 'undefined') {
        userSocketMap[userId] = socket.id;
        console.log(`User ${userId} connected with socket ${socket.id}`);
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }

    // Handle sending messages
    socket.on("sendMessage", (messageData) => {
        const { receiverId } = messageData;
        const receiverSocketId = userSocketMap[receiverId];
        
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("receiveMessage", messageData);
            console.log(`Message sent from ${messageData.senderId} to ${receiverId}`);
        } else {
            console.log(`User ${receiverId} is offline, message will be delivered when they come online`);
            // Here you might want to store the message in your database
            // and send it when the user comes online
        }
        
        // Send the message back to the sender (for UI update)
        socket.emit("messageSent", messageData);
    });

    // Handle typing indicators
    socket.on("typing", ({ receiverId, senderId }) => {
        const receiverSocketId = userSocketMap[receiverId];
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("userTyping", { senderId });
        }
    });

    // Handle stop typing
    socket.on("stopTyping", ({ receiverId, senderId }) => {
        const receiverSocketId = userSocketMap[receiverId];
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("userStoppedTyping", { senderId });
        }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        if (userId && userId !== 'undefined') {
            delete userSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        }
    });
});

export {app, io, server}
