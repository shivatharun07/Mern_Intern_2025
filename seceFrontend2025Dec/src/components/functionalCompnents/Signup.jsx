import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {
      email,
      username,
      password,
    });

    const { message, isSignup } = response.data;

    if (isSignup) {
      alert(message);
      navigate("/login");
    } else {
      throw new Error("Signup failed: Invalid response from server");
    }
  } catch (e) {
    alert(`Signup Failed: ${e.response?.data?.message || e.message}`);
  }
};

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already having an account?<Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;