import React, { useContext, useState } from "react";
import { PrimaryContext } from "../../components/context/PrimaryContext";
import { useNavigate } from 'react-router-dom';
import Admin from "../Admin/Admin";
import axios from 'axios';

import "./Home.css"
import path from "path";

function Home() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  })
  const {setAdminCredentials, adminCredentials, setIsAdmin} = useContext(PrimaryContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    const adminUser = await axios({
      method: 'POST',
      url: 'http://localhost:3000/admins/login',
      data: formData
    })
    console.log(adminUser.data)
    setAdminCredentials(adminUser.data)    
    setIsAdmin(true)
    navigate('/Admin')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
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
              type="userName" 
              name="userName" 
              placeholder="userName"
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