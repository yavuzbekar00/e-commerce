import React from "react";
import "./ProductsPage.css";
import CustomButton from "../CustomButton/CustomButton.js";
import ProductCard from "./ProductCard.js";
import { useSelector } from "react-redux";

function ProductsPage() {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="product-container">
      <div className="product-top">
        <CustomButton text={"Add New Product"} />
      </div>

      <div className="product-map">
        {products.map((product) => (
          <div className="product-bottom">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
