const products = [
  {
    id: "1",
    name: "samsung A1",
    price: 20500,
    category: "celular",
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    description: "descripcion : samsung A1",
  },
  {
    id: "2",
    name: "samsung A2",
    price: 15000,
    category: "tablet",
    img: "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    stock: 20,
    description: "descripcion : samsung A2",
  },
  {
    id: "3",
    name: "samsung Ao10",
    price: 17000,
    category: "notebook",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    stock: 15,
    description: "descripcion : samsung Ao10",
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 400);
  });
};
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 400);
  });
};
