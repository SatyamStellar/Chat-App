import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("database connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/chatapp`)
    } catch (error) {
        console.log("Error connecting to MongoDB", error)
    }
}
