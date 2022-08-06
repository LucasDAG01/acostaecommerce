import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="" atr="logo" />
          </div>
          <div className="col">
            <div className="nav-title">
              <Link to="/">TechLand</Link>
            </div>
          </div>
          <div className="col">
            <div className="nav-items">
              <Link
                to="/category/notebook"
                className="boton"
                style={{ color: "white", backgroundColor: "black" }}
              >
                Notebooks
              </Link>
              <Link
                to="/category/tablet"
                className="boton"
                style={{ color: "white", backgroundColor: "black" }}
              >
                Tablets
              </Link>
              <Link
                to="/category/celular"
                className="boton"
                style={{ color: "white", backgroundColor: "black" }}
              >
                Celulares
              </Link>
            </div>
          </div>
          <div className="col">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
