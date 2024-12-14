import React, { useState } from "react";
import "./ProductsPage.css";
import { useSelector } from "react-redux";

function ProductCard({ product }) {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div className="product-card">
      <div key={product.productName}>
        <div className="product-image">
          <img src="https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231019/13/899e8cb7-16a0-3617-bae0-555eacd2e713/1_org_zoom.jpg"></img>
        </div>
        <div className="product-allDetails">
          <div className="product-details">
            <div className="product-detail">{product.productName}</div>
            <div className="product-detail">{product.productDetail}</div>
            <div className="product-detail">{product.productStock}</div>
            <div className="product-detail">{product.productPrice}</div>
          </div>
          <div className="product-buttons">
            <button className="product-button">Düzenle</button>
            <button className="product-button">Sil</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
