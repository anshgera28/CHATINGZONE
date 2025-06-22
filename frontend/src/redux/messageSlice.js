import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: [],
        conversations: {},
        typingUsers: {}
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        addNewMessage: (state, action) => {
            const { conversationId, message } = action.payload;
            if (!state.conversations[conversationId]) {
                state.conversations[conversationId] = [];
            }
            state.conversations[conversationId].push(message);
            // Also keep a flat list of all messages
            state.messages.push(message);
        },
        setConversation: (state, action) => {
            const { conversationId, messages } = action.payload;
            state.conversations[conversationId] = messages;
        },
        setTypingStatus: (state, action) => {
            const { conversationId, userId, isTyping } = action.payload;
            if (!state.typingUsers[conversationId]) {
                state.typingUsers[conversationId] = [];
            }
            
            if (isTyping && !state.typingUsers[conversationId].includes(userId)) {
                state.typingUsers[conversationId].push(userId);
            } else if (!isTyping) {
                state.typingUsers[conversationId] = state.typingUsers[conversationId].filter(id => id !== userId);
            }
        },
        clearConversation: (state, action) => {
            const { conversationId } = action.payload;
            if (state.conversations[conversationId]) {
                delete state.conversations[conversationId];
            }
            if (state.typingUsers[conversationId]) {
                delete state.typingUsers[conversationId];
            }
        }
    }
});

export const {
    setMessages,
    addNewMessage,
    setConversation,
    setTypingStatus,
    clearConversation
} = messageSlice.actions;

export default messageSlice.reducer;
