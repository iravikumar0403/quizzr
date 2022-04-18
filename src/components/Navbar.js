import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav className="nav flex space-between">
        <Link to="/" className="logo mr-1">
          <p>
            <span>Q</span>uizzr
          </p>
        </Link>
        <button className="btn icon-only">
          <i className="fa-solid fa-sun"></i>
        </button>
      </nav>
    </header>
  );
};
