import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

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
              <h1>TechLand</h1>
            </div>
          </div>
          <div className="col">
            <div className="nav-items">
              <button style={{ color: "white", backgroundColor: "black" }}>
                Notebooks
              </button>
              <button style={{ color: "white", backgroundColor: "black" }}>
                Tablets
              </button>
              <button style={{ color: "white", backgroundColor: "black" }}>
                Celulares
              </button>
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
