import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm ">
        <div className="container-fluid">
          <Link className="navbar-brand" aria-current="page" to="/">
            TechLand
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link to="/category/notebook" class="nav-link">
                  Notebooks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/tablet" class="nav-link">
                  Tablets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/celular" class="nav-link">
                  Celulares
                </Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
