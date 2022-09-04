import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  const quantity = getQuantity();
  return (
    <div className="container- text-center bg-dark">
      <div className="row justify-content-center">
        <Link to="/cart" className="col-md-6">
          <img
            className="mx-auto d-block"
            src="images/basket-shop.png"
            alt="CartWidget"
            width="60"
          />
        </Link>

        <div className="col-md-6 p-2">
          <h1 className="text-danger p-1">{quantity}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
