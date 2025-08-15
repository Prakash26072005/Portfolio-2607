import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.module.css";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h1>Your message has been submitted ✅</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Success;
