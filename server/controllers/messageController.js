import User from "../models/User.js";
import Message from "../models/Message.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const userId = req.user._id;
        const fileredUser = await User.find({ _id: { $ne: userId } }).select("-password");

        const unseenMsg = {}

        const promises = fileredUser.map(async (user) => {
            const messages = await Message.find({ sernderId: user._id, receverId: userId, seen: false })

            if (messages.length > 0) {
                unseenMsg[user._id] = messages.length
            }
        })

        await Promise.all(promises);

        res.json({
            success: true,
            users: fileredUser,
            unseenMsg
        })

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: "Error fetching users" });
    }
}


export const getMessages = async (req, res) => {
    try {

        const { id: selectedUserId } = req.params;

        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                { sernderId: myId, receverId: selectedUserId },
                { sernderId: selectedUserId, receverId: myId }
            ]
        })
        await Message.updateMany({ sernderId: selectedUserId, receverId: myId }, { seen: true })

        res.json({
            success: true,
            messages
        })

    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ success: false, message: "Error fetching messages" });
    }
}



export const markAsSeen = async (req, res) => {
    try {

        const { id } = req.params;

        await Message.findByIdAndUpdate({ id }, { seen: true })

        res.json({
            success: true,
        })

    } catch (error) {
        console.error("Error marking messages as seen:", error);
        res.status(500).json({ success: false, message: "Error marking messages as seen" });
    }
}
