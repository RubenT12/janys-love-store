import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: "Coach For Men", price: 1800, image: "/images/coach.jpg", category: "Perfumes" },
  { id: 2, name: "Paris Hilton", price: 850, image: "/images/paris.jpg", category: "Perfumes" },
  { id: 3, name: "Pure Seduction", price: 480, image: "/images/pure.jpg", category: "Victoria's Secret" },
  { id: 4, name: "Hot Wheels", price: 210, image: "/images/hotwheels.jpg", category: "Juguetes" },
  { id: 5, name: "Slime Kit", price: 280, image: "/images/slime.jpg", category: "Juguetes" },
  { id: 6, name: "Superman Figure", price: 320, image: "/images/superman.jpg", category: "Juguetes" }
];

export default function App() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const categories = ["Todos", ...new Set(products.map(p => p.category))];
  const filteredProducts = filter === "Todos" ? products : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-rose-50 pb-20">
      <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        <img src="/logo.png" alt="Jany's Love" className="h-12" />
        <div className="flex items-center gap-4">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-md text-sm"
          >
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <span className="text-rose-600 font-semibold">🛒 {cart.length}</span>
        </div>
      </header>
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow border"
          >
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-rose-500 font-semibold">${product.price} MXN</p>
              <button
                className="mt-2 px-3 py-1 text-sm bg-rose-500 text-white rounded"
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
            </div>
          </motion.div>
        ))}
      </main>

      <a
        href="https://wa.me/526643050837?text=Hola%20Jany,%20quiero%20hacer%20un%20pedido%20desde%20la%20tienda%20en%20línea"
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full px-4 py-3 shadow-lg text-sm hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        📱 Pedir por WhatsApp
      </a>
    </div>
  );
}
