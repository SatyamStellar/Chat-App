import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div className="bg-[url('./src/assets/random-dark.png')] bg-contain bg-no-repeat bg-center bg-zinc-950" >
      < Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes >
    </div >
  )
}

export default App
