import React from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import "./Home.css"

function Home() {

  return (
    <div className="landind-display">

        <section className="learner-section">
            <button>Welcome Learner</button>

        </section>

        <section className="admin-section">

          <form className="admin-login-form">
            <label htmlFor="">Login</label>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="password"/>
            <button type="submit">Login</button>
            <p>Don't have an account? 
              <a href="">Sign Up!</a> 
            </p>
          </form>
        </section>

    </div>
  )
}

export default Home