import "./login.css";
import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="header">
        <div className="header-logo">
          <img
            className="logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
            alt="whatsap ogo"
          />
        </div>

        <div className="header-name">
          <p>WHATSAPP WEB</p>
        </div>
      </div>

      <div className="login-details"></div>
    </div>
  );
};

export default Login;
