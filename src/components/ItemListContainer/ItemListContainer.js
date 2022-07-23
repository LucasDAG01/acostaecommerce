import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{greeting}</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
