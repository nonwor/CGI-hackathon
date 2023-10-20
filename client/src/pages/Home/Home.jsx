import React, { useContext } from "react";
import { PrimaryContext } from "../../components/context/PrimaryContext";

import "./Home.css"

function Home() {

  const {setAdminCredentials, adminCredentials} = useContext(PrimaryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adminCredentials);
    // axios request to get admin
  }

  const handleInputChange = (e) => {
    setAdminCredentials({
      ...adminCredentials,
      [e.target.name]: e.target.value,
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
            <button>Login</button>
          </form>
        </section>

    </div>
  )
}

export default Home