import "./App.css";
import NavBar from "./components/Navbar.jsx";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home.jsx";
import Questions from "./pages/Questions/Questions";
import Game from "./pages/Game/Game.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
