import { useNavigate } from "react-router-dom"
import assets, { userDummyData } from "../assets/assets"

const LeftSideBar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate()

  return (
    <div className={`bg-gray-800/60 backdrop-blur-md border-r border-gray-700 h-full p-5 overflow-y-auto transition-all ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className="pb-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <img src={assets.logo} alt="Logo" className="w-8" />
            <p className="text-xl font-bold">EasyChat</p>
          </div>
          <div className="relative group">
            <img src={assets.menu_icon} alt="Menu" className="cursor-pointer w-5" />
            <div className="absolute right-0 top-full -mt-1 hidden group-hover:block bg-gray-700 rounded-lg shadow-lg py-2 z-10 w-32">
              <p onClick={() => navigate('/profile')} className="px-4 py-2 text-sm hover:bg-gray-600 cursor-pointer">Edit Profile</p>
              <hr className="border-gray-600" />
              <p className="px-4 py-2 text-sm hover:bg-gray-600 cursor-pointer">Logout</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 rounded-full flex items-center gap-2 px-4 py-2 mb-5">
          <img src={assets.search_icon} alt="Search" className="w-4 opacity-70" />
          <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm text-white placeholder:text-gray-400 flex-1" />
        </div>
      </div>

      <div className="space-y-2">
        {userDummyData.map((user, index) => (
          <div
            key={index}
            onClick={() => setSelectedUser(user)}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all hover:bg-gray-700/50 ${selectedUser?._id === user._id ? 'bg-violet-600/30' : ''}`}
          >
            <img src={user.profilePic || assets.avatar_icon} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.fullName}</p>
              <span className={`text-xs ${index < 3 ? 'text-green-400' : 'text-gray-400'}`}>{index < 3 ? 'Online' : 'Offline'}</span>
            </div>
            {index < 2 && <span className="text-xs text-white bg-violet-500 px-1.5 rounded-full">{index + 1}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar
