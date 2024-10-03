import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div className="container-full main-container">
      <div className="container">
        <div className="header flex justify-between align-center">
          <div className="logo">
            <Link to="/">
              <h1 className="headings website-name">
                <span className="name-span">IMDb</span> Movies
              </h1>
            </Link>
          </div>
          <div className="menu flex justify-between align-center">
            <div className="home menu-items">
              <Link to="/">
                <h3 className="headings">Home</h3>
              </Link>
            </div>
            <div className="search menu-items">
              <Link to="/search">
                <h3 className="headings">Search</h3>
              </Link>
            </div>
            <div className="about-us menu-items">
              <Link to="/about-us">
                <h3 className="headings">About us</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
