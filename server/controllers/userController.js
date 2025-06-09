import User from "../models/User.js";
import bcrypt from "bcrypt";

import { getToken } from "../util.js";
import cloudinary from "../config/cloudinary.js";

export const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        if (!fullName || !email || !password || !bio) {
            return res.status(400).json({ success: false, message: "Please fill all the fields" });
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName: fullName,
            email,
            password: hashedPassword,
            bio,
        });

        const token = getToken(newUser._id);

        res.json({
            success: true,
            userData: newUser,
            token,
            message: "User Created Successfully"

        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userData = await User.findOne({ email })

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" });
        }

        const token = getToken(userData._id);

        res.json({
            success: true,
            userData: {
                success: true,
                userData,
                token,
                message: "Login Successfully"
            }
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({ success: false, message: error.message });

    }
}


export const checkAuth = (req, res) => {
    res.json({
        success: true,
        user: req.user
    })
}


export const updateUser = async (req, res) => {
    try {

        const { fullname, bio, profilePic } = req.body;
        j
        const userId = req.user._id;

        let updatedUser;

        if (!profilePic) {
            updateUser = await User.findOneAndUpdate(userId, { bio, fullname }, { new: true })
        } else {
            const upload = await cloudinary.uploader.upload(profilePic)

            updateUser = await User.findOneAndUpdate(userId, { bio, fullname, profilePicture: upload.secure_url }, { new: true })
        }

        res.json({
            success: true,
            user: updateUser,
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({ success: false, message: error.message });

    }
}



