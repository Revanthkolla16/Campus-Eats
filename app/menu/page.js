"use client"
import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";

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

const allItems = Object.values(menu).flat();
const categoryOrder = Object.keys(menu);

const FoodCard = ({ item }) => {
  const { getItemQty, addToCart, removeFromCart, setItemQty } = useCart();
  const qty = getItemQty(item.name);
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
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          ) : (
            <div className="w-36 md:w-40 flex items-center justify-center bg-orange-500 rounded-full py-2">
              <button
                className="flex-1 text-xl text-white font-bold rounded-full transition min-w-0 cursor-pointer"
                style={{padding: 0}}
                onClick={() => removeFromCart(item.name)}
                aria-label="Decrease quantity"
              >-</button>
              <span className="flex-1 flex items-center justify-center font-semibold text-white rounded-full text-lg bg-orange-500 min-w-0">
                {qty}
              </span>
              <button
                className="flex-1 text-xl text-white font-bold rounded-full transition min-w-0 cursor-pointer"
                style={{padding: 0}}
                onClick={() => setItemQty(item, qty + 1)}
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

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sort, setSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtering logic
  const filterFn = item => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    return matchesSearch && matchesType;
  };

  // Get items for the selected category (or all)
  let itemsToShow = [];
  if (selectedCategory === "all") {
    itemsToShow = allItems.filter(filterFn);
  } else {
    itemsToShow = (menu[selectedCategory] || []).filter(filterFn);
  }
  if (sort === "low") itemsToShow = itemsToShow.slice().sort((a, b) => a.price - b.price);
  if (sort === "high") itemsToShow = itemsToShow.slice().sort((a, b) => b.price - a.price);

  return (
    <main className="min-h-screen w-full pt-24 px-4 md:px-16 bg-[#FFF9F7] font-sans flex flex-col">
      <div className="flex flex-col items-center mb-8 gap-4">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for food..."
            className="w-full pl-6 pr-12 py-3 rounded-full border border-orange-300 bg-white shadow focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg text-black placeholder:text-gray-700 placeholder:font-medium transition-all"
            style={{ color: 'black', backgroundColor: 'white' }}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">
            <i className="fa fa-search"></i>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-xl">
          <select
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value)}
            className="px-5 py-2 rounded-full border border-orange-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 text-base shadow-sm transition-all cursor-pointer"
          >
            <option value="all">All Types</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
            <option value="egg">Egg</option>
          </select>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="px-5 py-2 rounded-full border border-orange-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 text-base shadow-sm transition-all cursor-pointer"
          >
            <option value="">Sort by</option>
            <option value="low">Cost: Low to High</option>
            <option value="high">Cost: High to Low</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-center gap-2 w-full max-w-4xl mt-2">
          <button
            className={`px-5 py-2 rounded-full font-semibold text-base transition-all cursor-pointer border ${selectedCategory === "all" ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-700 border-orange-200 hover:bg-orange-50"}`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          {categoryOrder.map(cat => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full font-semibold text-base transition-all cursor-pointer border ${selectedCategory === cat ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-700 border-orange-200 hover:bg-orange-50"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mb-8 flex-grow">
        {itemsToShow.length === 0 ? (
          <div className="text-center text-gray-500 text-xl py-16">No items found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {itemsToShow.map((item, idx) => (
              <FoodCard key={item.name + idx} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MenuPage; 