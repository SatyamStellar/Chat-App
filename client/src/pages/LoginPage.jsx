import { useState } from "react";
import assets from "../assets/assets.js";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">

      <form
        onSubmit={onSubmitHandler}
        className="bg-gray-800/50 backdrop-blur-md border border-gray-700 p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <h2 className="font-bold text-2xl text-white mb-6 flex justify-between items-center">
          {currState}
          {isDataSubmitted && (
            <button
              type="button"
              onClick={() => {
                setIsDataSubmitted(false);
              }}
              className="text-gray-400 hover:text-white transition"
            >
              <img src={assets.arrow_icon} alt="Back" className="w-5 rotate-90" />
            </button>
          )}
        </h2>

        {currState === "Sign up" && !isDataSubmitted && (
          <div className="mb-4">
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        {!isDataSubmitted && (
          <>
            <div className="mb-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </>
        )}

        {currState === "Sign up" && isDataSubmitted && (
          <div className="mb-4">
            <textarea
              rows={4}
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Add a short bio..."
            ></textarea>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition duration-200 transform hover:scale-[1.02]"
        >
          {currState === "Sign up"
            ? isDataSubmitted
              ? "Finish Sign up"
              : "Create Account"
            : "Login"}
        </button>

        <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
          <input type="checkbox" id="terms" required className="cursor-pointer" />
          <label htmlFor="terms">Agree to the terms of use & privacy policy</label>
        </div>

        <div className="mt-6 text-center">
          {currState === "Sign up" ? (
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-400 hover:text-violet-300 cursor-pointer transition"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              Create an account{" "}
              <span
                onClick={() => {
                  setCurrState("Sign up");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-400 hover:text-violet-300 cursor-pointer transition"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
