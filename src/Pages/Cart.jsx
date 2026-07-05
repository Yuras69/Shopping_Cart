import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import NavBar from '../Components/NavBar';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <NavBar />
      <div className="p-50">
        <h1>Your Shopping Cart</h1>
        <div className="flex flex-col gap-10">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) :
           (
            cart.map((item, index) => (
              <div key={index} className="border border-gray-300 p-6 flex items-center">
                <img src={item.img} alt={item.pName} className="w-24 h-24 rounded-md mr-6" />
                <div>
                  <p className="font-bold">{item.pName}</p>
                  <div className="flex gap-2">
                    <p>Price: {item.pPrice.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: {(item.pPrice * item.quantity).toFixed(2)}</p>
                </div>
                <div>
                </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;