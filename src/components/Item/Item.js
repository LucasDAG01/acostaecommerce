import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("click en item");
  };
  return (
    <div>
      <div className="card" onClick={handleClick} style={{ width: "20rem" }}>
        <img className="card-img-top img-fluid" src={img} alt={name} />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3 className="card-text">Precio: ${price}</h3>
          <Link to={`/detail/${id}`}>Ver detalle</Link>
          <h3 className="card-text">Stock: {stock}</h3>
        </div>
      </div>
    </div>
  );
};

export default Item;
