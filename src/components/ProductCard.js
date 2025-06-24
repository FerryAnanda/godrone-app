import React from 'react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width={150} />
      <h3>{product.name}</h3>
      <p>Rp {product.price.toLocaleString()}</p>
      <button onClick={() => addToCart(product)}>Tambah ke Keranjang</button>
    </div>
  );
}
