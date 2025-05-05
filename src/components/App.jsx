import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient'; // Asegúrate que esté bien importado
import ProductForm from './components/ProductForm';




export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

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
          <div className="text-sm">🛒 {cart.length}</div>
        </div>
      </header>
      
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md my-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-center text-rose-500">Agregar nuevo producto</h2>
      <ProductForm />
      </div>

      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-pink-600">${product.price.toLocaleString()} MXN</p>
              <button
                className="mt-3 w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
            </div>
          </motion.div>
        ))}
      </main>
<a
  href={`https://wa.me/526643050837?text=Hola Jany, quiero hacer un pedido con los siguientes productos: ${cart.map(p => `${p.name} ($${p.price} MXN)`).join(', ')}`}
  className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full px-4 py-3 shadow-lg text-sm hover:bg-green-600"
  target="_blank"
  rel="noopener noreferrer"
>
  📩 Pedir por WhatsApp
</a>
    </div>
  );
}

