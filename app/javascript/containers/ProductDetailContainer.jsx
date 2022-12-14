import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

class ProductDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const id = this.props.params.id;

    axios
      .get(`/api/v1/products/${id}.json`)
      .then((response) => {
        this.setState({ product: response.data.product });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <img
              className="img-fluid"
              src="https://via.placeholder.com/350x150"
              width="100%"
            />
          </div>

          <div className="col-md-10 offset-md-1">
            <div className="float-right">
              <h3>
                <span className="badge badge-pill badge-purple">
                  {product.price}
                </span>
              </h3>
            </div>
            <div>
              <h3>{product.name}</h3>
            </div>

            <div className="mb-4">{product.description}</div>

            <div className="float-right btn-edit-del">
              <a href="#" className="btn btn-outline-danger btn-lg">
                Delete
              </a>
            </div>

            <div className="btn-edit-del">
              <a href="#" className="btn btn-outline-purple btn-lg">
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (props) => (
  <ProductDetailContainer {...props} params={useParams()} />
);