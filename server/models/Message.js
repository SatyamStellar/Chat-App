import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    sernderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
    },
    seen: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });


const Message = mongoose.model("Message", messageSchema);

export default Message;
