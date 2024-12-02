import React, { useState } from "react";
import "./LoginPage.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const userName = "admin";
  const password = "admin123";

  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleButton = () => {
    if (inputUserName === userName && inputPassword === password) {
      navigate("/admin");
    } else {
      alert("Giriş Bilgileri Yanlış!");
      setInputPassword("");
      setInputUserName("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-head">Admin Panel</div>
      <div className="login-card">
        <div className="login-title">Sign in</div>
        <form className="login-form">
          <div className="login-input">
            <label id="username" className="login-label">
              Username
            </label>
            <input
              placeholder="username"
              id="username"
              className="login-inputbox"
              value={inputUserName}
              onChange={(e) => setInputUserName(e.target.value)}
            ></input>
          </div>
          <div className="login-input">
            <label id="password" className="login-label">
              Password
            </label>
            <input
              placeholder="password"
              id="password"
              className="login-inputbox"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            ></input>
          </div>
        </form>
        <CustomButton onClick={handleButton} text={"Sign in"} />
      </div>
    </div>
  );
}

export default LoginPage;
