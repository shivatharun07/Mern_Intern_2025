import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
  event.preventDefault();
  console.log('Login attempt with:', { email });
  console.log('API URL:', import.meta.env.VITE_API_URL);

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      email,
      password,
    });

    const { message, isLoggedIn, token } = response.data;

    if (isLoggedIn) {
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", "true");
      alert(message);
      navigate("/");
    } else {
      throw new Error("Login failed: Invalid response from server");
    }
  } catch (e) {
    console.error('Login error:', e);
    if (e.response) {
      alert(`Login Failed: ${e.response.data?.message || e.message}`);
    } else {
      alert(`Login Failed: ${e.message}`);
    }
  }
};

  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      <p>
        Create an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;