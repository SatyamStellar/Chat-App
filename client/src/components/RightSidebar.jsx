import assets, { imagesDummyData } from "../assets/assets.js"

const RightSidebar = ({ selectedUser }) => {
  return selectedUser && (
    <div className="bg-gray-800/60 backdrop-blur-md border-l border-gray-700 overflow-y-auto text-white hidden md:block">
      <div className="pt-16 pb-6 flex flex-col items-center text-center px-4">
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2 border-purple-500" />
        <h1 className="mt-3 text-xl font-semibold flex items-center justify-center gap-2">
          {selectedUser.fullName}
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </h1>
        <p className="text-sm text-gray-400 mt-1">{selectedUser.bio}</p>
      </div>

      <hr className="border-gray-700 my-4" />

      <div className="px-5">
        <p className="text-sm text-gray-400 mb-2">Media</p>
        <div className="grid grid-cols-2 gap-3 max-h-[250px] overflow-y-auto">
          {imagesDummyData.map((url, index) => (
            <div key={index} className="rounded overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img src={url} alt="Media" className="w-full h-24 object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>

      <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-8 rounded-full font-medium hover:from-purple-600 hover:to-indigo-700 transition-colors">
        Logout
      </button>
    </div>
  )
}
export default RightSidebar
