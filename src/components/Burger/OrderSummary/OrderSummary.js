import React from "react";

const OrderSummary = props => {
  const ingredientsSummery = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey}: {props.ingredients[igKey]}
        </span>
      </li>
    );
  });

  return (
    <div>
      <h3>Your Order</h3>
      <p> A delicioud burger with the following ingredients:</p>
      <ul>{ingredientsSummery}</ul>
      <p>Continue to checkout</p>
    </div>
  );
};

export default OrderSummary;
