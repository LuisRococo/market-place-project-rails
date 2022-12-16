import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import ProductsContainer from "./ProductsContainer";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ProductDetailContainer from "./ProductDetailContainer";
import Signup from "./SignupFormContainer";

class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount = () => {
    this.fetchCurrentUser();
  };

  fetchCurrentUser = () => {
    axios
      .get("/api/v1/users/get_current_user.json")
      .then((response) => {
        let currentUser = response.data.current_user || null;
        this.setCurrentUser(currentUser);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  setCurrentUser = (currentUser) => {
    this.setState({ currentUser });
  };

  handleSignout = (event, location, navigate) => {
    event.preventDefault();
    axios
      .delete("/api/v1/signout.json")
      .then((response) => {
        this.setState({
          currentUser: null,
        });
        if (location.pathname !== "/") {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <Header
          currentUser={this.state.currentUser}
          onSignout={this.handleSignout}
        />
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route path="/products/:id" element={<ProductDetailContainer />} />
          <Route
            path="/register"
            element={
              <Signup
                onFetchCurrentUser={this.fetchCurrentUser}
                currentUser={this.state.currentUser}
              />
            }
          />

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
  }
}

export default App;
