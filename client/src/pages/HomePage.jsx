import { useState } from "react"
import ChatContainer from "../components/ChatContainer"
import LeftSideBar from "../components/LeftSideBar"
import RightSidebar from "../components/RightSidebar"

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(false)

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className={`h-full grid ${selectedUser ? 'md:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'} transition-all duration-300`}>
        <LeftSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <RightSidebar selectedUser={selectedUser} />
      </div>
    </div>
  )
}

export default HomePage
