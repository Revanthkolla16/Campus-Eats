"use client"
import React, { useState, useEffect } from "react";

const menu = {
  Breakfast: [
    { name: "Masala Dosa", price: 60, description: "Crispy rice crepe filled with spiced potato.", type: "veg", image: "/biryani.png" },
    { name: "Aloo Paratha", price: 40, description: "Flatbread stuffed with spiced potatoes.", type: "veg", image: "/biryani.png" },
    { name: "Idli Sambar", price: 35, description: "Steamed rice cakes served with sambar and chutney.", type: "veg", image: "/biryani.png" },
    { name: "Poha", price: 30, description: "Flattened rice cooked with spices and veggies.", type: "veg", image: "/biryani.png" },
    { name: "Upma", price: 30, description: "Savory semolina porridge with vegetables.", type: "veg", image: "/biryani.png" },
    { name: "Chai & Bun", price: 20, description: "Classic tea with soft bun.", type: "veg", image: "/biryani.png" },
  ],
  Lunch: [
    { name: "Veg Biryani", price: 80, description: "Aromatic basmati rice with mixed vegetables and spices.", type: "veg", image: "/biryani.png" },
    { name: "Paneer Butter Masala", price: 100, description: "Cottage cheese cubes in creamy tomato gravy.", type: "veg", image: "/biryani.png" },
    { name: "Chicken Biryani", price: 150, description: "Aromatic rice with tender chicken.", type: "non-veg", image: "/biryani.png" },
    { name: "Chicken Curry", price: 120, description: "Tender chicken cooked in spicy curry sauce.", type: "non-veg", image: "/biryani.png" },
    { name: "Dal Tadka", price: 60, description: "Yellow lentils tempered with spices.", type: "veg", image: "/biryani.png" },
    { name: "Jeera Rice", price: 50, description: "Basmati rice flavored with cumin seeds.", type: "veg", image: "/biryani.png" },
    { name: "Roti (2 pcs)", price: 20, description: "Whole wheat flatbread.", type: "veg", image: "/biryani.png" },
  ],
  Snacks: [
    { name: "Samosa", price: 20, description: "Crispy pastry with spicy potato filling.", type: "veg", image: "/biryani.png" },
    { name: "Chole Bhature", price: 70, description: "Spicy chickpeas served with fried bread.", type: "veg", image: "/biryani.png" },
    { name: "Pav Bhaji", price: 60, description: "Spiced vegetable mash served with buttered buns.", type: "veg", image: "/biryani.png" },
    { name: "Egg Puff", price: 25, description: "Flaky pastry filled with spiced egg.", type: "non-veg", image: "/biryani.png" },
    { name: "Veg Sandwich", price: 30, description: "Fresh veggies and chutney in soft bread.", type: "veg", image: "/biryani.png" },
    { name: "French Fries", price: 40, description: "Crispy golden potato fries.", type: "veg", image: "/biryani.png" },
  ],
  Dinner: [
    { name: "Egg Fried Rice", price: 90, description: "Stir-fried rice with eggs and veggies.", type: "non-veg", image: "/biryani.png" },
    { name: "Rajma Chawal", price: 70, description: "Kidney beans curry served with rice.", type: "veg", image: "/biryani.png" },
    { name: "Butter Chicken", price: 140, description: "Creamy tomato-based chicken curry.", type: "non-veg", image: "/biryani.png" },
    { name: "Palak Paneer", price: 90, description: "Spinach and cottage cheese curry.", type: "veg", image: "/biryani.png" },
    { name: "Veg Pulao", price: 70, description: "Rice cooked with mixed vegetables and spices.", type: "veg", image: "/biryani.png" },
    { name: "Tandoori Roti (2 pcs)", price: 25, description: "Clay oven-baked whole wheat bread.", type: "veg", image: "/biryani.png" },
  ],
  Desserts: [
    { name: "Gulab Jamun", price: 40, description: "Soft milk-solid balls soaked in rose-flavored syrup.", type: "veg", image: "/biryani.png" },
    { name: "Rasgulla", price: 35, description: "Spongy cottage cheese balls in light syrup.", type: "veg", image: "/biryani.png" },
    { name: "Ice Cream", price: 50, description: "Assorted flavors of creamy ice cream.", type: "veg", image: "/biryani.png" },
    { name: "Kheer", price: 30, description: "Rice pudding with cardamom and nuts.", type: "veg", image: "/biryani.png" },
  ],
  Beverages: [
    { name: "Masala Chai", price: 20, description: "Spiced Indian tea with milk.", type: "veg", image: "/biryani.png" },
    { name: "Cold Coffee", price: 40, description: "Chilled coffee with milk and ice.", type: "veg", image: "/biryani.png" },
    { name: "Sweet Lassi", price: 30, description: "Sweetened yogurt drink.", type: "veg", image: "/biryani.png" },
    { name: "Fresh Lime Soda", price: 25, description: "Refreshing soda with lime and sugar.", type: "veg", image: "/biryani.png" },
  ],
};

const categories = ["all", ...Object.keys(menu)];

const FoodCard = ({ item }) => {
  const [qty, setQty] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-0 flex flex-col items-stretch border border-gray-100 transition-all duration-300 hover:border-orange-500 hover:-translate-y-3`}
      style={isHovered ? { animation: 'orange-glow 1.2s infinite ease-in-out' } : { animation: 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
        <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
        {item.type && (
          <span className={`absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-bold ${item.type === 'veg' ? 'bg-green-100 text-green-700 border border-green-400' : 'bg-orange-500 text-white'}`}>
            {item.type === 'veg' ? 'Veg' : 'Non-veg'}
          </span>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="text-lg font-bold text-gray-800 font-sans">{item.name}</div>
            <div className="text-orange-500 font-bold text-lg font-sans">₹{item.price}</div>
          </div>
          <div className="text-gray-500 text-sm mb-2 font-sans">{item.description}</div>
        </div>
        <div className="mt-4 flex justify-center">
          {qty === 0 ? (
            <button
              className="w-36 md:w-40 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition-all text-center flex items-center justify-center cursor-pointer"
              onClick={() => setQty(1)}
            >
              Add to Cart
            </button>
          ) : (
            <div className="w-36 md:w-40 flex items-center justify-center bg-orange-500 rounded-full py-2">
              <button
                className="flex-1 text-xl text-white font-bold rounded-full transition min-w-0 cursor-pointer"
                style={{padding: 0}}
                onClick={() => setQty(qty - 1)}
                aria-label="Decrease quantity"
              >-</button>
              <span className="flex-1 flex items-center justify-center font-semibold text-white rounded-full text-lg bg-orange-500 min-w-0">
                {qty}
              </span>
              <button
                className="flex-1 text-xl text-white font-bold rounded-full transition min-w-0 cursor-pointer"
                style={{padding: 0}}
                onClick={() => setQty(qty + 1)}
                aria-label="Increase quantity"
              >+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MenuPage = () => {
  useEffect(() => {
    if (!document.getElementById('orange-glow-style')) {
      const style = document.createElement('style');
      style.id = 'orange-glow-style';
      style.innerHTML = `@keyframes orange-glow { 0%, 100% { box-shadow: 0 0 24px 4px rgba(251,146,60,0.4); } 50% { box-shadow: 0 0 36px 8px rgba(251,146,60,0.7); } }`;
      document.head.appendChild(style);
    }
  }, []);

  const [selected, setSelected] = useState("all");
  const allItems = Object.values(menu).flat();
  const itemsToShow = selected === "all" ? allItems : menu[selected.charAt(0).toUpperCase() + selected.slice(1)];

  return (
    <main className="min-h-screen pt-24 px-4 md:px-16 bg-[#FFF9F7] font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-10 text-center font-sans tracking-tight">Menu</h1>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-8 md:px-10 py-3 md:py-4 rounded-2xl border-2 text-lg font-semibold font-sans transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-orange-200 cursor-pointer
              ${selected === cat
                ? 'bg-orange-100 border-orange-500 text-orange-600 shadow-md scale-105'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-300'}
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {itemsToShow && itemsToShow.map((item, idx) => (
            <FoodCard key={item.name + idx} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MenuPage; 