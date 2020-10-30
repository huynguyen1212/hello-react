import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Product from "./pages/Product";

import { CartProvider } from "./contexts/Cart";

const Index = () => <h2>Home</h2>;

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />

          <Route path="/" exact component={Index} />
          <Route path="/product/" exact component={Product} />
        </div>
      </Router>
    </CartProvider>
  );
}
