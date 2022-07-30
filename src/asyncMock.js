const products = [
  {
    id: "1",
    name: "samsung A1",
    price: 20500,
    category: "celular",
    img: " ",
    stock: 10,
    description: "descripcion : samsung A1",
  },
  {
    id: "2",
    name: "samsung A2",
    price: 15000,
    category: "celular",
    img: "",
    stock: 20,
    description: "descripcion : samsung A2",
  },
  {
    id: "3",
    name: "samsung Ao10",
    price: 17000,
    category: "notebook",
    img: "",
    stock: 15,
    description: "descripcion : samsung Ao10",
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
