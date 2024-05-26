import React from "react";
import "./signStyle.css";
import { BsBoxArrowRight } from "react-icons/bs";
import logo from "./images/logo.jpg";

function Sign() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const nom = data.get("nom");
    const prenom = data.get("prenom");
    const email = data.get("email");
    const MotDePasse = data.get("password");
    const DateNaissance = data.get("DateN");
    const Sexe = data.get("sexe");
    const user = {
      nom: nom,
      prenom: prenom,
      email: email,
      motDePasse: MotDePasse,
      dateNaissance: DateNaissance,
      sexe: Sexe,
    };

    console.log(user);
    
    fetch('http://127.0.0.1:8080/api/v1/client/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
            <input type="text" name="nom" id="nom" placeholder="First name" />
            <br />
          </div>
          <div className="div">
            <input
              type="text"
              name="prenom"
              id="prenom"
              placeholder="Last name"
            />
            <br />
          </div>
          <div className="div">
            <input
              type="email"
              name="email"
              id="Email"
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
              required
              placeholder="Date of birth"
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
