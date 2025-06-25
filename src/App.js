import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Login from './components/Login';
import products from './data';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  const addToCart = (product) => setCartItems([...cartItems, product]);

  const removeFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const handleApplyDiscount = () => {
    const codes = { DRONE10: 0.1, DRONE25: 0.25 };
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

  const generateWhatsAppLink = (cart, total) => {
  const phone = process.env.REACT_APP_WA_PHONE || '6280000000000'; // fallback jika belum diatur
  let message = `🛒 *Checkout GoDrone*\n\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - Rp ${item.price.toLocaleString()}\n`;
  });

  message += `\n💰 *Total Akhir:* Rp ${total.toLocaleString()}\n`;
  message += `\nMohon konfirmasi pesanan saya. Terima kasih 🙏`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="container">
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            <div className="discount-box">
              <h3>Masukkan Kode Diskon</h3>
              <input
                type="text"
                value={discountCode}
                onChange={e => setDiscountCode(e.target.value)}
              />
              <button onClick={handleApplyDiscount}>Terapkan</button>

              {appliedDiscount && (
                <p className="success">
                  Kode <strong>{appliedDiscount.code}</strong> memberikan diskon {(appliedDiscount.amount * 100)}%
                </p>
              )}

              <div className="totals">
                <p>Total: Rp {total.toLocaleString()}</p>
                {appliedDiscount && (
                  <>
                    <p>Diskon: -Rp {discountAmount.toLocaleString()}</p>
                    <h3>Total Akhir: Rp {finalTotal.toLocaleString()}</h3>
                  </>
                )}
                {!appliedDiscount && (
                  <h3>Total Akhir: Rp {finalTotal.toLocaleString()}</h3>
                )}

                <a
                  href={generateWhatsAppLink(cartItems, finalTotal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-button"
                >
                  Checkout via WhatsApp
                </a>
              </div>
            </div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
