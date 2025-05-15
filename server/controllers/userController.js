import User from "../models/User.js";
import bcrypt from "bcrypt";

import { getToken } from "../util.js";

export const signup = async (req, res) => {
    const { email, fullname, password, bio } = req.body;

    try {
        if (!email || !fullname || !password || !bio) {
            return res.status(400).json({ success: false, message: "Please fill all the fields" });
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullname,
            email,
            password: hashedPassword,
            bio,
        });

        const token = getToken(newUser._id);

        res.json({
            success: true,
            useData: {
                success: true,
                newUser,
                token,
                message: "User Created Successfully"
            }
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
            useData: {
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
