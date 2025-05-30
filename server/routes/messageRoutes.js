import express from 'express';
import { protectRoute } from "../middleware/auth.js"
import { getMessages, getUsersForSidebar, markAsSeen, sendMessage } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get('/users', protectRoute, getUsersForSidebar);

messageRouter.post('/:id', protectRoute, getMessages);

messageRouter.put('mark/:id', protectRoute, markAsSeen);

messageRouter.post('/send/:id', protectRoute, sendMessage)

export default messageRouter;

