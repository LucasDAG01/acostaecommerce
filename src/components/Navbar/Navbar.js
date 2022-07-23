import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div>
        <h1>TechLand</h1>
      </div>
      <div>
        <button>Notebooks</button>
        <button>Tablets</button>
        <button>Celulares</button>
        <button>Componentes</button>
      </div>
    </nav>
  );
};

export default Navbar;
