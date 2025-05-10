import { useState } from "react"
import ChatContainer from "../components/ChatContainer"
import LeftSideBar from "../components/LeftSideBar"
import RightSidebar from "../components/RightSidebar"

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState(false)

  return (
    <div className=" w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div className={`backdrop-blur-md boder-2 border-gray-500 roundec-2xl overflow-hidden h-[100%] grid grid-cols-1 relative] ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>

        <LeftSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
