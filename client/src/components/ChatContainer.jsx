import assets, { messagesDummyData } from "../assets/assets.js"

const ChatContainer = ({ selectedUser, SetSelectedUser }) => {
  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img src={assets.profile_martin} alt="" className="w-10 rounded-full" />
        <p className="flex text-lg text-white flex-1 items-center gap-2">Martin Johson
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>
        <img onClick={() => SetSelectedUser(null)} src={assets.arrow_icon} className="md:hidden max-w-7" alt="" />
        <img src={assets.help_icon} className="max-md:hidden max-w-5" alt="" />
      </div>
      {/* Chat messages will go here */}
    </div>
  ) :
    (
      <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
        <img src={assets.logo_icon} alt="" className=" max-w-16 " />
        <p className="font-medium text-white text-lg">Start Chating</p>
        <img src={assets.arrow_icon} className="max-md:hidden max-w-5" alt="" />
      </div>
    )
}

export default ChatContainer
