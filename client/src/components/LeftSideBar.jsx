import { useNavigate } from "react-router-dom"
import assets, { userDummyData } from "../assets/assets"

const LeftSideBar = ({ selectedUser, setSelectedUser }) => {

  const navigate = useNavigate()

  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img src={assets.logo} alt="" className="max-w-16" />
          <p className="text-2xl font-bold">EasyChat</p>
          <div className="relative py-2 group">
            <img src={assets.menu_icon} alt="" className="max-h-5 cursor-pointer" />
            <div className="absolute top-full right-0 z-20 w-32 rounded-b-md rounded-l-md bg-zinc-600 border border-black text-white p-2 hidden group-hover:block">
              <p onClick={() => navigate('/profile')} className="cursor-pointer text-sm">Edit Profile</p>
              <hr className="my-2 border-t-black" />
              <p className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>
        <div className="bg-[#282142]/40 rounded-full flex items-center gap-2 py-3 mt-5 px-4">
          <img src={assets.search_icon} alt="" className="w-4" />
          <input type="text" className="bg-transparent border-none outline-none text-white text-sm placeholder-[#c8c8c8] flex-1" placeholder="Search" />
        </div>
      </div>
      <div className="flex flex-col">
        {userDummyData.map((user, index) => (
          <div
            onClick={() => { setSelectedUser(user) }}
            key={index}
            className={`relative flex items-center gap-2 p-2 rounded cursor-pointer max-sm:text-sm ${selectedUser?._id === user._id && 'bg-[#282142]/40'}`}>
            <img src={user?.profilePic || assets.avatar_icon} className="w-[35px] aspect-[1/1] rounded-full" alt="" />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {
                index < 3
                  ? <span className="text-green-400 text-xs">Online</span>
                  : <span className="text-neutral-400 text-xs">Offline</span>
              }
            </div>
            {
              index < 2 && <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50">{index}</p>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar
