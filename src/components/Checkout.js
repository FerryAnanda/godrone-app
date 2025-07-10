import React from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = ({
  cartItems,
  appliedDiscount,
  discountCode,
  setDiscountCode,
  handleApplyDiscount,
  total,
  discountAmount,
  finalTotal,
  generateWhatsAppLink,
  clearCart,
  removeFromCart,
}) => {
  const navigate = useNavigate();

  return (
    <div className="checkout-container">
      <h2>Checkout GoDrone</h2>

      {cartItems.length === 0 ? (
        <p>
          Keranjang kosong.{' '}
          <button onClick={() => navigate('/')}>Kembali belanja</button>
        </p>
      ) : (
        <>
          <h3>🛒 Isi Keranjang</h3>
          <ul className="checkout-list">
            {cartItems.map((item, index) => (
              <li key={index} className="checkout-item">
                <span>
                  {item.name} - Rp {item.price.toLocaleString()}
                </span>
                <button
                  className="delete-button"
                  onClick={() => removeFromCart(index)}
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>

          <button className="clear-button" onClick={clearCart}>
            Hapus Semua
          </button>

          <div className="discount-box">
            <h4>Masukkan Kode Diskon (Opsional)</h4>
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Contoh: DRONE10"
            />
            <button onClick={handleApplyDiscount}>Terapkan</button>

            {appliedDiscount && (
              <p className="success">
                Kode <strong>{appliedDiscount.code}</strong> memberikan diskon{' '}
                {(appliedDiscount.amount * 100)}%
              </p>
            )}
          </div>

          <div className="totals">
            <p>Total: Rp {total.toLocaleString()}</p>
            {appliedDiscount && (
              <p>Diskon: -Rp {discountAmount.toLocaleString()}</p>
            )}
            <h3>Total Akhir: Rp {finalTotal.toLocaleString()}</h3>

            <a
              href={generateWhatsAppLink(cartItems, finalTotal)}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-button"
            >
              Checkout via WhatsApp
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
