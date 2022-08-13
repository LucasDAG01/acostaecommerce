import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="Counter">
      <p>{quantity}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button className="Button" onClick={() => onAdd(quantity)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
