"use client"
import React from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

const NAVBAR_HEIGHT = 72; // px, adjust if your navbar is taller
const PAGE_PADDING = 24; // px
const DELIVERY_PER_ITEM = 5;

const CartPage = () => {
  const { cartItems, setItemQty, removeFromCart } = useCart();
  const hasItems = cartItems.length > 0;
  const itemsTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryTotal = cartItems.reduce((sum, item) => sum + item.qty * DELIVERY_PER_ITEM, 0);
  const total = itemsTotal + deliveryTotal;
  return (
    <main
      className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-[#FFF9F7] to-white px-0 py-0 flex flex-col"
      style={{ paddingTop: `${NAVBAR_HEIGHT + PAGE_PADDING}px` }}
    >
      <div className="w-full max-w-5xl mx-auto bg-white rounded-none md:rounded-2xl shadow-xl p-0 md:p-8 flex flex-col items-center min-h-[70vh] flex-grow mb-12">
        {hasItems ? (
          <div className="flex flex-col h-full w-full flex-grow">
            <div className="w-full space-y-6 mb-8 px-2 md:px-0 overflow-y-auto" style={{ maxHeight: '50vh' }}>
              {cartItems.map((item) => (
                <div key={item.name} className="flex flex-col sm:flex-row items-center justify-between bg-orange-50 rounded-xl p-4 shadow-sm w-full">
                  <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-full border-2 border-orange-200" />
                    <div>
                      <div className="font-bold text-lg text-gray-800">{item.name}</div>
                      <div className="text-gray-500">₹{item.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex items-center gap-2">
                      <button className="bg-orange-500 text-white w-9 h-9 flex items-center justify-center rounded-full text-lg font-bold hover:bg-orange-600 hover:scale-110 hover:shadow-lg transition-all duration-150 cursor-pointer" onClick={() => setItemQty(item, item.qty - 1)}>-</button>
                      <span className="font-extrabold text-xl text-gray-900 w-8 text-center select-none">{item.qty}</span>
                      <button className="bg-orange-500 text-white w-9 h-9 flex items-center justify-center rounded-full text-lg font-bold hover:bg-orange-600 hover:scale-110 hover:shadow-lg transition-all duration-150 cursor-pointer" onClick={() => setItemQty(item, item.qty + 1)}>+</button>
                    </div>
                    <button className="ml-2 text-red-500 hover:text-white hover:bg-red-500 hover:scale-110 hover:shadow-lg text-xl p-2 rounded-full bg-transparent cursor-pointer flex items-center justify-center transition-all duration-150" onClick={() => setItemQty(item, 0)} aria-label="Remove item">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full mt-auto flex flex-col gap-2">
              <div className="w-full flex justify-between items-center px-2 md:px-0 text-gray-700 text-base">
                <span>Subtotal</span>
                <span>₹{itemsTotal}</span>
              </div>
              <div className="w-full flex justify-between items-center px-2 md:px-0 text-gray-700 text-base">
                <span>Delivery</span>
                <span>₹{deliveryTotal}</span>
              </div>
              <div className="w-full flex justify-between items-center border-t pt-4 px-2 md:px-0 text-lg font-bold">
                <span className="text-black">Total</span>
                <span className="text-orange-500 text-xl font-extrabold">₹{total}</span>
              </div>
              <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full text-lg shadow transition max-w-md cursor-pointer hover:scale-105 hover:shadow-lg duration-150 self-center">Checkout</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center w-full text-center min-h-[40vh]">
            <span className="text-6xl text-orange-400 mb-4">
              <i className="fa fa-shopping-cart"></i>
            </span>
            <img src="/empty-cart.svg" alt="Empty Cart" className="w-32 h-32 mb-6 opacity-80" onError={e => e.target.style.display='none'} />
            <p className="text-gray-500 text-lg mb-2">Your cart is currently empty.</p>
            <Link href="/menu" className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition cursor-pointer hover:scale-105 hover:shadow-lg duration-150">Browse Menu</Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage; 