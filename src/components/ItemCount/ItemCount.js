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
    <div className="Counter ">
      <h1 className="text-danger p-1">{quantity}</h1>
      <button class="btn btn-sm btn-secondary me-1" onClick={decrement}>
        -
      </button>
      <button class="btn btn-sm btn-secondary me-3" onClick={increment}>
        +
      </button>
      <button
        class="btn btn-sm btn-secondary me-3"
        onClick={() => onAdd(quantity)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
