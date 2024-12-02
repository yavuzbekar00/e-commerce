import React from "react";
import "./CustomButton.css";

function CustomButton({ text, onClick }) {
  return (
    <div>
      <button onClick={onClick} className="customButton">
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
