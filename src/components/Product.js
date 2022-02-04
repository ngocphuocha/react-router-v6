import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Product" />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New product</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Product;
