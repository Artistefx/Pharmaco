import React, { useContext } from "react";
import "./signStyle.css";
import { BsBoxArrowRight } from "react-icons/bs";
import logo from "./images/logo.jpg";
import { CartContext } from "../Panier/CartProvider";

function Sign() {
  const { setUser, ToggleIsConnected } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const nom = data.get("nom");
    const prenom = data.get("prenom");
    const email = data.get("email");
    const motDePasse = data.get("password");
    const dateNaissance = data.get("DateN");
    const sexe = data.get("sexe");
    const user = {
      nom: nom,
      prenom: prenom,
      email: email,
      motDePasse: motDePasse,
      dateNaissance: dateNaissance,
      sexe: sexe,
    };

    const createUser = async (user) => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8086/api/v1/client/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );

        if (!response.ok) {
          throw new Error(`Error creating user: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error creating user:", error);
        throw error;
      }
    };

    const registerUser = async (userData) => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8086/api/v1/client/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (!response.ok) {
          throw new Error(`Error registering user: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error registering user:", error);
        throw error;
      }
    };

    const handleUserCreationAndRegistration = async (user) => {
      try {
        const createdUser = await createUser(user);
        const registeredUser = await registerUser(createdUser);

        sessionStorage.setItem("user", JSON.stringify(registeredUser));
        setUser(registeredUser); // Update state
        ToggleIsConnected();
        window.location.href = "/";
      } catch (error) {
        console.error("Error in user creation and registration flow:", error);
      }
    };

    handleUserCreationAndRegistration(user);
  };

  return (
    <div className="container">
      <div className="additional-container"></div>
      <div className="form-container form-frame">
        <div className="loginHeader">
          <img src={logo} alt="Pharmaco Logo" className="loginLogo" />
        </div>

        <h1 className="form-title">Create your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="div">
            <input
              type="text"
              name="nom"
              id="nom"
              placeholder="First name"
              required
            />
            <br />
          </div>
          <div className="div">
            <input
              type="text"
              name="prenom"
              id="prenom"
              placeholder="Last name"
              required
            />
            <br />
          </div>
          <div className="div">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <br />
          </div>
          <div className="div">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <br />
          </div>
          <div className="div">
            <input
              type="date"
              name="DateN"
              id="DateN"
              placeholder="Date of birth"
              required
            />
            <br />
          </div>
          <div className="div">
            <select name="sexe" id="sexe" required>
              <option value="" disabled selected>
                Select your gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <br />
          </div>
          <div>
            <br />
            <button type="submit">
              Sign up <BsBoxArrowRight />
            </button>
          </div>
          <a href="/login" className="login-link">
            You already have an account? Sign in.
          </a>
        </form>
      </div>
    </div>
  );
}

export default Sign;
