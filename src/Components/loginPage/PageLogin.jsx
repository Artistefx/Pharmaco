// PageLogin.jsx
import React, { useRef, useEffect } from "react";

import video1 from "../loginPage/LoginAssets/video1.mp4";
import logo1 from "../loginPage/LoginAssets/logo1.webp";
import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import "./PageLogin.css";

function PageLogin() {
  const videoRef = useRef(null);

  useEffect(() => {
    const start = 10;
    const end = 15;
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.currentTime = start;
      const onTimeUpdate = () => {
        if (videoElement.currentTime >= end) {
          videoElement.currentTime = start;
        }
      };

      videoElement.addEventListener("timeupdate", onTimeUpdate);

      return () => {
        videoElement.removeEventListener("timeupdate", onTimeUpdate);
      };
    }
  }, []);

  return (
    <div className="loginPage">
      <div className="videoContainer">
        <video ref={videoRef} autoPlay muted loop className="backgroundVideo">
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <div className="loginContainer">
        <div className="loginHeader">
          <img src={logo1} alt="Pharmaco Logo" className="loginLogo" />
        </div>
        <h1 className="loginTitle">Welcome to Pharmaco</h1>
        <form className="loginForm">
          <div className="inputGroup">
            <MdOutlineAlternateEmail className="inputIcon" />
            <input
              type="email"
              placeholder="User name or Email"
              className="loginInput"
            />{" "}
            {/* Added className for styling */}
          </div>
          <div className="inputGroup">
            <MdLockOutline className="inputIcon" />
            <input type="password" placeholder="Password" />
          </div>
          <a href="#" className="forgotPassword">
            Forgot Password?
          </a>
          <button type="submit" className="loginButton">
            <IoLogIn className="buttonIcon" />
            <span>Login</span>
          </button>
          <div className="separator">or</div>
          <button type="button" className="googleSignInButton">
            Sign in with Google
          </button>
          <div className="signUpPrompt">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PageLogin;
