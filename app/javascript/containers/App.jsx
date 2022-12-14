import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Jumbotron from "../components/products/Jumbotron";
import ProductsContainer from "../components/products/ProductsContainer";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route path="/jumbo" element={<Jumbotron />} />
          <Route path="/jumbo/tron" element={<Jumbotron />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
