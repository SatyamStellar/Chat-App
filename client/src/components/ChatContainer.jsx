import { useRef } from "react"
import assets, { messagesDummyData } from "../assets/assets.js"
import { useEffect } from "react"
import { formateMsgTime } from "../lib/utils.js"

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef(null)

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return selectedUser ? (
    <div className="flex flex-col h-full bg-gray-900/40 backdrop-blur-md border-r border-l border-gray-700 relative">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
        <img src={assets.profile_martin} alt="Martin" className="w-9 h-9 rounded-full" />
        <p className="text-white font-medium flex-1">{selectedUser.fullName}</p>
        <img
          src={assets.arrow_icon}
          alt="Back"
          onClick={() => setSelectedUser(null)}
          className="w-6 cursor-pointer md:hidden"
        />
        <img src={assets.help_icon} alt="Help" className="w-5 cursor-pointer max-md:hidden" />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messagesDummyData.map((msg, index) => (
          <div key={index} className={`flex ${msg.senderId === selectedUser._id ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${msg.senderId === selectedUser._id
                ? 'bg-gray-700/50 rounded-tl-none'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 rounded-tr-none'
                }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray-400 block text-right mt-1">{formateMsgTime(msg.createdAt)}</span>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

      <div className="p-4 border-t border-gray-700 bg-gray-900/60 sticky bottom-0">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-gray-800/50 text-white rounded-full px-4 py-2 outline-none border border-gray-600 focus:border-purple-500"
          />
          <button className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full">
            <img src={assets.send_button} alt="Send" className="w-5 invert" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-full gap-4 bg-gray-800/30 max-md:hidden">
      <p className="text-white text-2xl font-semibold">Start Chating</p>
    </div>
  )
}
export default ChatContainer
