import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    socket: null,
    onlineUsers: [],
    isConnected: false,
    error: null
};

const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        setSocket: (state, action) => {
            state.socket = action.payload;
            state.isConnected = !!action.payload;
            if (!action.payload) {
                state.onlineUsers = [];
            }
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
        connectionError: (state, action) => {
            state.error = action.payload;
            state.isConnected = false;
        },
        resetSocketState: () => initialState
    }
});

export const { 
    setSocket, 
    setOnlineUsers, 
    connectionError,
    resetSocketState 
} = socketSlice.actions;

export default socketSlice.reducer;
