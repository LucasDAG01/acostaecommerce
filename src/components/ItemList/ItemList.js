import Item from "../Item/Item";
import { memo } from "react";

const ItemList = ({ products }) => {
  return (
    <div className="album">
      <div className="container text-center">
        <div
          className="row justify-content-center"
          onClick={() => console.log("hice click en itemlist")}
        >
          {products.map((prod) => (
            <Item key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ItemList);
