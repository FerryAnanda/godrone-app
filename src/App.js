import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  const addToCart = (product) => setCartItems([...cartItems, product]);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleApplyDiscount = () => {
    // Daftar kode promo
    const codes = {
      JONI10: 0.1, // 10%
      FERRYANANDA20: 0.2, // 20%
    };

    const code = discountCode.toUpperCase();
    if (codes[code]) {
      setAppliedDiscount({ code, amount: codes[code] });
      alert(`Kode ${code} berhasil digunakan!`);
    } else {
      alert("Kode tidak valid.");
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = appliedDiscount ? total * appliedDiscount.amount : 0;
  const finalTotal = total - discountAmount;

  return (
    <div style={{ padding: "20px" }}>
      <h1>GoDrone</h1>
      <ProductList addToCart={addToCart} />
      <hr />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />

      <hr />
      <div>
        <h2>Gunakan Kode Promo</h2>
        <input
          type="text"
          value={discountCode}
          onChange={e => setDiscountCode(e.target.value)}
          placeholder="Masukkan kode (contoh: DISKON10)"
        />
        <button onClick={handleApplyDiscount}>Terapkan</button>

        {appliedDiscount && (
          <p style={{ color: 'green' }}>
            Kode <strong>{appliedDiscount.code}</strong> memberikan potongan {(appliedDiscount.amount * 100).toFixed(0)}%
          </p>
        )}

        <h3>Total: Rp {total.toLocaleString()}</h3>
        {appliedDiscount && (
          <>
            <p>Diskon: -Rp {discountAmount.toLocaleString()}</p>
            <h3>Total Akhir: Rp {finalTotal.toLocaleString()}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
