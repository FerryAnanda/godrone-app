import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Checkout from './components/Checkout';

import products from './data';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

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

  const clearCart = () => {
  if (window.confirm('Yakin ingin menghapus semua item dari keranjang?')) {
    setCartItems([]);
    setAppliedDiscount(null); // reset diskon juga jika perlu
  }
};

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = appliedDiscount ? total * appliedDiscount.amount : 0;
  const finalTotal = total - discountAmount;

  const generateWhatsAppLink = (cart, total) => {
    const phone = process.env.REACT_APP_WA_PHONE || '6281234567890';
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
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={
          <div className="container">
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={
          <Checkout
            cartItems={cartItems}
            appliedDiscount={appliedDiscount}
            discountCode={discountCode}
            setDiscountCode={setDiscountCode}
            handleApplyDiscount={handleApplyDiscount}
            total={total}
            discountAmount={discountAmount}
            finalTotal={finalTotal}
            generateWhatsAppLink={generateWhatsAppLink}
            clearCart={clearCart}
            removeFromCart={removeFromCart}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
