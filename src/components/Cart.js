import React from 'react';

export default function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Keranjang</h2>
      {cartItems.length === 0 ? <p>Keranjang kosong</p> :
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Rp {item.price.toLocaleString()} 
              <button onClick={() => removeFromCart(index)}>Hapus</button>
            </li>
          ))}
        </ul>
      }
      <h3>Total: Rp {total.toLocaleString()}</h3>
    </div>
  );
}
