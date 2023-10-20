import './App.css'
import NavBar from './components/Navbar.jsx';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Home/>
      <Admin/>
    </div>
  );
}

export default App
