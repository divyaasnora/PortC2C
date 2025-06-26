import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

import icon from '../../assets/download.jpg';

function Login() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputs.email || !inputs.password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login", inputs);
      console.log("Server Response:", response.data);

      if (response.data.status === "success") {
        alert("Login successful!");
        navigate("/status", { replace: true });
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          alert("Invalid credentials. Please try again.");
        } else if (status === 403) {
          alert("Your account is pending approval by the admin.");
        } else {
          alert(data.message || "An error occurred. Please try again.");
        }
      } else {
        alert("Server is unreachable. Please try again later.");
      }
    }
  };

  return (
    <div className="container">
      <img src={icon}></img>
      <h2>Varisis Advanced Enginneering pvt ltd.</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          
        </div>

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="link">
          Sign up here
        </Link>
      </p>
    </div>
  );
}

export default Login;
