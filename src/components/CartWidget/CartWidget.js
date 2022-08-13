import "./CartWidget.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  const quantity = getQuantity();
  return (
    <div>
      <Link to="/cart" className="CartWidget">
        <img
          className="CartImg"
          src="images/basket-shop.png"
          alt="CartWidget"
        />
        {quantity}
      </Link>
    </div>
  );
};

export default CartWidget;
