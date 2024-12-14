import React, { useState } from "react";
import "./Admin.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import ProductsPage from "../../components/ProductsPage/ProductsPage";

function Admin() {
  const navigate = useNavigate();
  const handleQuitButton = () => {
    navigate("/login");
  };

  const [activePanel, setActivePanel] = useState("products");

  const changeActivePanel = (panelName) => {
    setActivePanel(panelName);
  };

  return (
    <div className="admin-container">
      <div className="admin-left">
        <div
          onClick={() => changeActivePanel("products")}
          className="admin-sidebar"
        >
          <Icon className="admin-sidebarIcon" icon="dashicons:products"></Icon>
          <div className="admin-sidebarTitle">Products</div>
        </div>
        <div
          onClick={() => changeActivePanel("categories")}
          className="admin-sidebar"
        >
          <Icon className="admin-sidebarIcon" icon="nrk:category"></Icon>
          <div className="admin-sidebarTitle">Categories</div>
        </div>
        <div onClick={handleQuitButton} className="admin-sidebar">
          <Icon className="admin-sidebarIcon" icon="ion:exit"></Icon>
          <div className="admin-sidebarTitle">Log Out</div>
        </div>
      </div>
      <div className="admin-right">
        {activePanel === "products" ? (
          <ProductsPage />
        ) : (
          <div>categories açık</div>
        )}
      </div>
    </div>
  );
}

export default Admin;
