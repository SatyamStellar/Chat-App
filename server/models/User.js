import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        string: true,
        required: true,
        unique: true,
    },
    fullname: {
        string: true,
        required: true,
        unique: true,
    },
    password: {
        string: true,
        required: true,
        unique: true,
        minlength: 6,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    profilePicture: {
        type: String,
    },

}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;
