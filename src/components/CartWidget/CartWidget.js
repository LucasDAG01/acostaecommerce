import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="CartWidget">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="carrito"
              src="images/basket-shop.png"
              alt="CartWidget"
            />
          </div>
          <div className="col">
            <p className="cont" style={{ color: "white" }}>
              {" "}
              10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
