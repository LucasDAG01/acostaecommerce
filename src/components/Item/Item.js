import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <li>
      <div className="card" style={{ width: "20rem" }}>
        <img
          className="card-img-top img-fluid"
          src={product.img}
          alt={product.name}
        />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <h3 className="card-text">{product.price}</h3>
          <Link to={`/detail/${product.id}`}>Ver detalle</Link>
          <h3 className="card-text">{product.stock}</h3>
        </div>
      </div>
    </li>
  );
};

export default Item;
