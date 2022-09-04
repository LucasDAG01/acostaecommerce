import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="col-sm-6 col-md-4 ">
      <div
        className="card shadow-sm text-bg-dark mb-3"
        onClick={handleClick}
        style={{ width: "18rem" }}
      >
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="350"
          src={img}
          alt={name}
        />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3 className="card-text">Precio: ${price}</h3>
          <Link to={`/detail/${id}`} class="btn btn-sm btn-secondary">
            Ver detalle
          </Link>
          <h3 className="card-text">Stock: {stock}</h3>
        </div>
      </div>
    </div>
  );
};

export default Item;
