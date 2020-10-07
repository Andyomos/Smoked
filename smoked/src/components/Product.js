import React from "react";
import "./styles/Social.css";
import ReactTooltip from "react-tooltip";
import { NavLink } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1 style={{ color: "rgba(255, 0, 0, 0.801)" }}>Products</h1>
      <hr />
      <div className="product">
        <div className="productHeader">
          <h1>Smoked Fish</h1>
          <small>Juiced out dry.</small>
          <div className="product-1 productDiv">
            <p>
              {" "}
              <span>SMOKED</span>{" "}
              <small>
                ~ Fish <span>&</span> Turkey
              </small>
              .
            </p>
          </div>
          <h5>
            Smoked dry fish{" "}
            <button data-tip="Order Smoked Dry Fish Now">
              <NavLink to="/contact" className="order">
                Order
              </NavLink>
            </button>
          </h5>{" "}
        </div>
        <div className="productHeader">
          <h1>Smoked Turkey</h1>
          <small>Crispy and crunchy.</small>
          <div className="product-2 productDiv">
            <p>
              {" "}
              <span>SMOKED</span>{" "}
              <small>
                ~ Fish <span>&</span> Turkey
              </small>
            </p>
          </div>
          <h5>
            Smoked crispy turkey{" "}
            <button data-tip="Order Your Turkey Now">
              <NavLink to="/contact" className="order">
                Order
              </NavLink>
            </button>
          </h5>
        </div>
        <div className="productHeader">
          <h1>Smoked Fish</h1>
          <small>Cleaned and well smoked.</small>
          <div className="product-3 productDiv">
            <p>
              <span>SMOKED</span>{" "}
              <small>
                ~ Fish <span>&</span> Turkey
              </small>
            </p>
          </div>
          <h5>
            Smoked full fish{" "}
            <button data-tip="Order Smoked Fish Now">
              <NavLink to="/contact" className="order">
                Order
              </NavLink>
            </button>
          </h5>
        </div>
      </div>
      <ReactTooltip effect="solid" delayShow={300} delayHide={1000} />
    </div>
  );
}

export default Product;
