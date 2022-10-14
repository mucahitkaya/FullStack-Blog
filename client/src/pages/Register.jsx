import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    passWord: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    //to stop refresh the page
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          name="username"
          required
          type="text"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          name="email"
          required
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="password"
          required
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>

        {err && <p>{err}</p>}
      </form>
    </div>
  );
};
export default Register;
