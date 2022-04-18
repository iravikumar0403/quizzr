import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <nav className="nav flex space-between">
        <Link to="/" className="logo mr-1">
          <p>
            <span>Q</span>uizzr
          </p>
        </Link>
        <button className="px-1 btn" onClick={toggleTheme}>
          {theme === "dark" ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </nav>
    </header>
  );
};
