import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <br />
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" name="password" />
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
