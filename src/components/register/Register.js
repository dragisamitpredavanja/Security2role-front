import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        username,
        password,
        name,
        address,
        email,
        admin,
      });
      // Redirektujte korisnika nakon uspešne registracije
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please check your input and try again");
      console.error("Registration failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        username,
        password,
        name,
        address,
        email,
        admin,
      });
      // Redirektujte korisnika nakon uspešne registracije
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please check your input and try again.");
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
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
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="admin"
            checked={admin}
            onChange={(e) => setAdmin(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="admin">
            Admin
          </label>
        </div>
        {/* <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="ftpUser"
                        checked={ftpUser}
                        onChange={(e) => setFtpUser(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="ftpUser">FTP User</label>
                </div> */}
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
