import React from "react";
import axios from "axios";

import Product from "../components/products/Product";
import Jumbotron from "../components/products/Jumbotron";

export default class ProductsContainer extends React.Component {
  state = { products: [] };

  componentDidMount = () => {
    this.loadProductsFromServer();
  };

  loadProductsFromServer = () => {
    axios
      .get("/api/v1/products.json")
      .then((response) => {
        const { products } = response.data;
        this.setState({ products });
      })
      .catch((error) => console.log(error.response.data));
  };

  render() {
    const products = this.state.products;
    const productList = products.map((product) => {
      return <Product key={product.id} product={product} />;
    });

    return (
      <>
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-2">
              <div className="row">
                <div className="card-deck">{productList}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
