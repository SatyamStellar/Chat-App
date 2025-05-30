import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-[url('./src/assets/random-dark.png')] bg-contain bg-no-repeat bg-center bg-zinc-950" >
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: 'bg-zinc-800 text-white',
          style: {
            fontSize: '1rem',
            borderRadius: '0.5rem',
          },
        }}
      < Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes >
    </div >
  )
}

export default App
