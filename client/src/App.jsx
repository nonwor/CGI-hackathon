import './App.css'
import NavBar from './components/Navbar.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App
