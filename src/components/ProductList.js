import React from 'react';
import ProductCard from './ProductCard';
import products from '../data';

export default function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Daftar Produk</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
