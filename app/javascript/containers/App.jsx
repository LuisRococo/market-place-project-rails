import React from "react";
import Jumbotron from "../components/products/Jumbotron";
import ProductsContainer from "../components/products/ProductsContainer";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <ProductsContainer />
      <Footer />
    </div>
  );
};

export default App;
