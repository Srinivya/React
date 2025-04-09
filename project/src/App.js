import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCart from "./Components/AddCart";
import Home from "./Components/Home";

export const productContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart(cart.concat(product));
  };

  return (
    <productContext.Provider value={cart}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home products={products} handleAddToCart={handleAddToCart} />
            }
          />
          <Route path="/AddCart" element={<AddCart />} />
        </Routes>
      </BrowserRouter>
    </productContext.Provider>
  );
}

export default App;
