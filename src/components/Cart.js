import React from "react";
import BookDetails from "./BookDetails";

const Cart = (props) => {
  const onIncreaseAmount = (item) =>{
    props.increaseItemAmount(item);
  }

  const onDecreaseAmount = (item) =>{
    props.decreaseItemAmount(item);
  }

  const getTotal = () => {
    let total = 0;
    props.cart.forEach(item => {
      total += (item.price * item.amount);
    });

    return total;
  }

  const userCart = props.cart.map((item) => {
    return (
      <tr key={item.title}>
        <td>
          <img className="book-image-cart" src={item.imageUrl} alt="" />
        </td>
        <td>
          <h4 className="book-title-cart">{item.title}</h4>
        </td>
        <td>
          <div className="cart-action">
            <p className="action-button" onClick={() => onDecreaseAmount(item)}>-</p>
            <p className="item-amount">{item.amount}</p>
            <p className="action-button" onClick={() => onIncreaseAmount(item)}>+</p>
          </div>
        </td>
        <td>
          ${item.price}
        </td>
        <td>
          ${item.price * item.amount}
        </td>
      </tr>
    );
  });

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Title</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>{userCart}</tbody>
      </table>
      Total: ${getTotal()}
    </div>
  );
};

export default Cart;
