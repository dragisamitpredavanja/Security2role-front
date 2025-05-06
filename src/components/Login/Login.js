import React, { useState } from "react";
import "./Login.css";
import axios from "axios"; // Uverite se da je axios importovan
import { useNavigate } from "react-router-dom"; // Importujte useNavigate za redirekciju

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("greska");
  const navigate = useNavigate(); // Inicijalizujte useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response.data;
      localStorage.setItem("token", token);
      console.log("Token:", token); // Proverite da li je token uspešno dobijen
      // Redi rektujte korisnika nakon uspešne prijave
      navigate("/home");
    } catch (error) {
      setError(
        "Login failed. ddd cetvrti Please check your credentials and try again."
      );
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* {error && (<div className="alert alert-danger ">{error}</div>)} */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <button
        type="button"
        className="btn btn-link mt-3"
        onClick={() => navigate("/register")}
      >
        Don't have an account? Register
      </button>
    </div>
  );
};

export default Login;
