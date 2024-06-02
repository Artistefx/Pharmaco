import React, { useRef, useEffect } from "react";
import video1 from "../loginPage/LoginAssets/video1.mp4";
import logo1 from "../loginPage/LoginAssets/logo1.webp";
import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import "./PageLogin.css";
import { CartContext } from "../Panier/CartProvider";

function PageLogin() {
  const videoRef = useRef(null);

  const { ToggleIsConnected, setUser } = React.useContext(CartContext);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    const user = {
      email: email,
      motDePasse: password,
    };

    fetch("http://localhost:8086/api/v1/client/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === true) {
          ToggleIsConnected();
          console.log(data);
          fetch("http://localhost:8086/api/v1/client/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((response) => response.json())
            .then((data) => {
              sessionStorage.setItem("user", JSON.stringify(data));
              setUser(data); // Update state
              window.location.href = "/";
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else {
          console.log("Error: Invalid credentials");
          // Handle failed login (e.g., show error message)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    e.target.reset();
  };

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
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <MdOutlineAlternateEmail className="inputIcon" />
            <input
              type="email"
              placeholder="User name or Email"
              className="loginInput"
              name="email"
              required
            />
          </div>
          <div className="inputGroup">
            <MdLockOutline className="inputIcon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="loginInput"
              required
            />
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
            Don't have an account? <a href="/signup">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PageLogin;
