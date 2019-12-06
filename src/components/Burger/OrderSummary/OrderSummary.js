import React from "react";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </div>
  );
};

export default OrderSummary;
