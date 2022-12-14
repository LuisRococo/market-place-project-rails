import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Jumbotron from "../components/products/Jumbotron";
import ProductsContainer from "./ProductsContainer";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ProductDetailContainer from "./ProductDetailContainer";
import NewProductForm from "../components/products/NewProductForm";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/products/:id" element={<ProductDetailContainer />} />
        <Route path="/newProduct" element={<NewProductForm />} />
        <Route
          path="*"
          element={
            <div className="container">
              <div className="row">
                <div className="card col-md-8 offset-md-2 mt-4 form-header-style">
                  <h1 className="text-center m-4">404: Not Found</h1>
                  <p className="text-center m-4">
                    The resource you are looking for, could not be found
                  </p>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
