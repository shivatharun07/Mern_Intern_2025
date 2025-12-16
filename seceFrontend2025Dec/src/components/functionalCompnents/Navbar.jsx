import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../css/Navbar.css";

function Navbar() {
  const [dropdown, showDropdown] = useState(false);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin") === "true";

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    alert("Logout Successful");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/" className="link">
        <li>Home</li>
      </Link>
      <Link to="/about" className="link">
        <li>About</li>
      </Link>
      <div
        className="dropdown"
        onMouseEnter={() => showDropdown(!dropdown)}
        onMouseLeave={() => showDropdown(!dropdown)}
      >
        <span className="link">Learning React</span>
        {dropdown && (
          <ol className="dropdown-list">
            <li>
              <Link to="/use-state" className="dropdown-link">
                useState
              </Link>
            </li>
            <li>
              <Link to="/use-effect" className="dropdown-link">
                useEffect
              </Link>
            </li>
            <li>
              <Link to="/use-effect-api" className="dropdown-link">
                useEffectWithAPI
              </Link>
            </li>
            <li>
              <Link to="/use-ref" className="dropdown-link">
                useRef
              </Link>
            </li>
            <li>

              <Link to="/use-memo" className="dropdown-link">

                useMemo
              </Link>
            </li>
            <li>

              <Link to="/use-callback" className="dropdown-link">

                useCallback
              </Link>
            </li>
          </ol>
        )}
      </div>
      <Link to="/contact" className="link">

        <li>Contact</li>
      </Link>
      {isLogin ? (
        <span className="link" onClick={handleLogout}>
          Logout
        </span>
      ) : (
        <Link to="/login" className="link">
          <li>Login</li>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
