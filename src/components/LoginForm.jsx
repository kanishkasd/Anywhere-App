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
      <div className="login-container">
        <div className="leftSide">
          <nav className="navbar">
            <div className="logo">Anywhere app</div>
            <ul className="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Join</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
