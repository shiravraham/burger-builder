import React from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  render() {
    const ingredientsSummery = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>
              {igKey}: {this.props.ingredients[igKey]}
            </span>
          </li>
        );
      }
    );

    return (
      <div>
        <h3>Your Order</h3>
        <p> A delicioud burger with the following ingredients:</p>
        <ul>{ingredientsSummery}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </div>
    );
  }
}

export default OrderSummary;
