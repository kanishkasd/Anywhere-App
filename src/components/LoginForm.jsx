import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import axiosInstance from "../api/axios";

const LoginForm = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
        expiresInMins: 30,
      });
      setMessage(`Login Successful !!!. Token ${response.data.token}`);
    } catch (error) {
      setMessage("Login failed", error);
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="leftSide">
          <nav className="navbar">
            <div className="logo">Anywhere app</div>

            {/* navbar  */}
            <ul className="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Join</a>
              </li>
            </ul>
          </nav>

          <div className="login-container">
            <h2 className="createAccount">
              Create New Account <span className="dot">.</span>
            </h2>
            <p>
              Already A member? <a href="#">Log In</a>
            </p>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="username"
                value={username}
                onchange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
