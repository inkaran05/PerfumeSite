import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (product, e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      updateQuantity(product, quantity);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <button onClick={clearCart}>Clear Cart</button>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>
              Quantity: 
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item, e)}
              />
            </p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
