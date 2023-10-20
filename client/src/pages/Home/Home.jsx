import React, { useContext } from "react";
import { PrimaryContext } from "../../components/context/PrimaryContext";
import axios from 'axios';

import "./Home.css"

function Home() {

  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  })
  const {setAdminCredentials, adminCredentials, setIsAdmin} = useContext(PrimaryContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(adminCredentials);
    
    const adminUser = await axios({
      method: 'POST',
      url: 'http://localhost:3000/admins/login',
      data: adminCredentials
    })

    setAdminCredentials(adminUser.data)    
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...adminCredentials,
      [name]: value,
    });
  };

  return (
    <div className="landind-display">

        <section className="learner-section">
            <button>Welcome Learner</button>
        </section>

        <section className="admin-section">
          <form onSubmit={handleSubmit} action="submit" className="admin-login-form">
            <label>Login</label>
            <input 
              onChange={handleInputChange} 
              type="email" 
              name="email" 
              placeholder="email"
            />
            <input 
              onChange={handleInputChange} 
              type="password" 
              name="password" 
              placeholder="password"
            />
            <button onClick={handleSubmit}>Login</button>
          </form>
        </section>

    </div>
  )
}

export default Home