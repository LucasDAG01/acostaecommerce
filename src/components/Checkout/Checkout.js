import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import React from "react";

import { db } from "../../services/firebase";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnChange1 = (e) => {
    setfirstName(e.target.value);
    console.log();
  };
  const handleOnChange2 = (e) => {
    setlastName(e.target.value);
  };

  const handleOnChange3 = (e) => {
    setphone(e.target.value);
  };

  const handleOnChange4 = (e) => {
    setaddress(e.target.value);
  };

  const navigate = useNavigate();

  const totalQuantity = getQuantity();
  const total = getTotal();

  const createOrder = async () => {
    setIsLoading(true);
    try {
      const objOrder = {
        buyer: {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          address: address,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      const outOfStock = [];

      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        alert(`El id de su orden es: ${orderAdded.id}`);
        clearCart();
        setOrderCreated(true);
        setTimeout(() => {
          navigate("/"); //direccion de navegacion para el retorno automatico
        }, 3000);
      } else {
        alert("Hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h1>Se esta generando tu orden...</h1>;
  }

  if (orderCreated) {
    return (
      <h1>La orden fue creada correctamente, muchas gracias por su compra</h1>
    );
  }

  return (
    <div className="container">
      <h1>Checkout</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col">
            <input
              name="firstName"
              type="text"
              placeholder="Nombre"
              value={firstName}
              onChange={handleOnChange1}
            />
          </div>
          <div className="col">
            <input
              name="lastName"
              type="text"
              placeholder="Apellido"
              value={lastName}
              onChange={handleOnChange2}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              name="phone"
              type="number"
              placeholder="Telefono"
              value={phone}
              onChange={handleOnChange3}
            />
          </div>
          <div className="col">
            <input
              name="address"
              type="text"
              placeholder="Dirección"
              value={address}
              onChange={handleOnChange4}
            />
          </div>
        </div>
      </form>
      <button
        className="btn btn-sm btn-dark py-2"
        onClick={createOrder}
        type="submit"
      >
        Generar Pedido
      </button>
    </div>
  );
};

export default Checkout;
