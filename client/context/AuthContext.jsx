import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const backendUrl = import.meta.env.REACT_APP_BACKEND_URL;

axios.defaults.baseURL = backendUrl;

export const AuthContext = createContext()

export const AuthProvider = ({ childern }) => {

    const [token, setToken] = useState(localStorage.getItem('token'))

    const [authUser, setAuthUser] = useState(null)
    const [onlineUser, setOnlineUser] = useState([])
    const [socket, setSocket] = useState(null)


    // Checking authentication token

    const checkAuth = async () => {
        try {
            const { data } = await axios.get('/api/auth/check')
            if (data.success) {
                setAuthUser(data.user)
                connectSocket(data.user)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Login function

    const login = async (state, credentials) => {
        try {
            const { data } = await axios.post(`/api/auth/${state}`, credentials)
            if (data.success) {
                setAuthUser(data.userdata)
                connectSocket(data.userdata)
                state.setIsLogin(true)
                axios.defaults.headers.common["token"] = data.token;
                setToken(data.token)
                localStorage.setItem('token', data.token)
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Logout function
    const logout = async () => {
        localStorage.removeItem('token')
        setToken(null)
        setAuthUser(null)
        setOnlineUser([])
        axios.defaults.headers.common["token"] = null;
        toast.success("Logout successfully")
        socket.disconnect();
    }

    // Setting up socket connection
    const connectSocket = (userData) => {
        if (!userData || socket?.connected) return;

        const newSocket = io(backendUrl, {
            query: {
                userId: userData._id,
            }
        })
        newSocket.connect();

        setSocket(newSocket)
        newSocket.on("onlineUsers", (userIds) => {
            setOnlineUser(userIds)
        })
    }

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["token"] = token;
        }
        checkAuth()
    }, [])


    const value = {
        axios,
        authUser,
        onlineUser,
        socket
    }

    return (
        <AuthContext.Provider value={value}>
            {childern}
        </AuthContext.Provider>
    )

}
