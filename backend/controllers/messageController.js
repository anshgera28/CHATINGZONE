import { conversation } from "../models/conversationModel.js";
import { message as Message } from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.Id;
        const receiverId = req.params.id;
        const { message } = req.body;

        let gotConversation = await conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });
        if (!gotConversation) {
            gotConversation = await conversation.create({
                participants: [senderId, receiverId],
                messages: []
            });
        }
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            gotConversation.messages.push(newMessage._id);
        }
        await gotConversation.save();
        return res.status(200).json({message: "Message sent successfully"});


    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
};
