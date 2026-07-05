import React from 'react'
import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import { useContext } from 'react';

export default function App() {

  const product = [
    { id: 1, name: 'Product 1', price: 10.0, description: 'This is product 1', img: 'https://img.drz.lazcdn.com/static/np/p/72a456e08d85bfcb0940fdf5e45c500d.jpg_400x400q80.jpg_.avif' },
    { id: 2, name: 'Product 2', price: 20.0, description: 'This is product 2', img: 'https://img.drz.lazcdn.com/static/np/p/72a456e08d85bfcb0940fdf5e45c500d.jpg_400x400q80.jpg_.avif' },
    { id: 3, name: 'Product 3', price: 30.0, description: 'This is product 3', img: 'https://img.drz.lazcdn.com/static/np/p/72a456e08d85bfcb0940fdf5e45c500d.jpg_400x400q80.jpg_.avif' }
  ]

  const { cart, setCart } = useContext(CartContext);

  

  const addCart = (name,price) => {
  const existingProduct = cart.find(item => item.pName === name);
  setCart((prev)=> 
  {
    if (existingProduct) {
      // Update quantity if product already exists
      return prev.map(item =>
        item.pName === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new product if not in cart
      return [
        ...prev,
        { pName: name, pPrice: price, quantity: 1 }
      ];
    }
  });
};
  

console.log(cart)
  return (

  

    <>
      <NavBar />
      <div className="p-50">
        <h1>Shopping Cart</h1>
        <div className="flex flex-wrap gap-10" >
          {product.map((p) => (
            <div key={p.id} className="border border-gray-300 p-6 w-75">
              <img src={p.img} alt={p.name} className="w-15 h-15 rounded-md" />
              <p>{p.name}</p>
              <p>Price: {p.price}</p>
              <p>Description: {p.description}</p>
               <button className="bg-[#73aab0] text-white px-4 py-2 rounded-md" onClick={() => {
            addCart(p.name,p.price);
              }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}