import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';
import { connectDB } from './db/db.js';
import userRouter from './routes/userRoute.js';
import messageRouter from './routes/messageRoutes.js';

const app = express();

const server = http.createServer(app);

app.use(express.json({ limit: "3mb" }))
app.use(cors())

app.use("/api/status", (req, res) => res.send("server is live"));
app.use("/api/auth", userRouter);
app.use("/api/message", messageRouter)

await connectDB()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is running on port " + PORT))
