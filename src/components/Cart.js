import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
}