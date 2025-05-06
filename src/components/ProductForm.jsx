import { useState } from 'react';
import supabase from '../supabaseClient';

export default function ProductForm() {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('products').insert([form]);
    if (error) return alert('❌ Error al guardar producto');
    alert('✅ Producto agregado con éxito');
    setForm({ name: '', category: '', price: '', image: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto my-8 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Categoría"
        value={form.category}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Precio"
        value={form.price}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Nombre del archivo de imagen (por ejemplo: perfume.jpg)"
        value={form.image}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <textarea
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Guardar producto
      </button>
    </form>
  );
}
