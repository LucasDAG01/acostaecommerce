import { useState } from "react";

const Counter = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const reduce = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={reduce}>-</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
