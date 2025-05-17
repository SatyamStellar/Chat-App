import { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("Martin Johnson");
  const [bio, setBio] = useState("Hi everyone");

  const hangleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl backdrop-blur-md border border-gray-700 bg-gray-800/40 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        <div className="flex items-center justify-center p-8 bg-gray-800/60 md:w-1/3 relative">
          <div className="text-center">
            <div className="relative mx-auto w-24 h-24 mb-4">
              <img
                src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-md"
              />
              <label
                htmlFor="avatar"
                className="absolute bottom-0 right-0 bg-indigo-600 text-white p-1.5 rounded-full cursor-pointer hover:bg-indigo-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 015.586 3.586L8 6l4-4 2.414 2.414z" />
                </svg>
              </label>
              <input
                onChange={(e) => setSelectedImg(e.target.files[0])}
                id="avatar"
                accept=".png, .jpg, .jpeg"
                type="file"
                hidden
              />
            </div>

            <h3 className="text-lg font-medium text-white">{name}</h3>
            <p className="text-sm text-gray-400">{bio || "Add a bio..."}</p>
          </div>
        </div>

        <form onSubmit={hangleSubmit} className="flex flex-col gap-6 p-8 flex-1">
          <h3 className="text-xl font-semibold text-white">Edit Profile</h3>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder:text-gray-400"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Bio</label>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              rows={4}
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder:text-gray-400"
              placeholder="Tell something about yourself..."
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
