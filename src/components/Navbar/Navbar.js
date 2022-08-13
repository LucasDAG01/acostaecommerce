import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Navbar">
      <div className="nav-title">
        <Link to="/">TechLand</Link>
      </div>

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

      <CartWidget />
    </nav>
  );
};

export default NavBar;
