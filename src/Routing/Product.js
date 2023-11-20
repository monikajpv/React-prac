import React from "react";
import "./Product.css";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div className="productcontainer">
      <div className="link">

        <Link to="electronics">Electronic</Link>

        <Link to="jewelery">Jewelery</Link>
        <Link to="mens">MensClothing</Link>
        <Link to="womens">WomensClothing</Link>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Product;