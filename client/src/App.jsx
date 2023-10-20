import "./App.css";
import NavBar from "./components/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="app">
      {/* <Modal /> */}
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
