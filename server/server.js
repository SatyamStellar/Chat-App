import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';
import { connectDB } from './db/db.js';
import userRouter from './routes/userRoute.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app);

export const io = new Server(server, {
    cors: { origin: "*" }
})

export const userSocketMap = {};

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    console.log("user connected", userId)

    if (userId) userSocketMap[userId] = socket.id

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("user disconnect", userId)
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

app.use(express.json({ limit: "3mb" }))
app.use(cors())

app.use("/api/status", (req, res) => res.send("server is live"));
app.use("/api/auth", userRouter);
app.use("/api/message", messageRouter)

await connectDB()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is running on port " + PORT))
