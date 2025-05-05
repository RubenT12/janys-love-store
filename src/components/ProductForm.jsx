import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../supabaseClient';


const supabaseUrl = 'https://mxcwvwgkuxgacogailgm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14Y3d2d2drdXhnYWNvZ2FpbGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNTAzMTQsImV4cCI6MjA2MTkyNjMxNH0.luWGB0EREJDdeocXlBjGUDoW2gscYm1pvcIFBiOPOKA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('products').insert([form]);
    if (error) return alert('Error al guardar producto');
    alert('Producto agregado con éxito');
    setForm({ name: '', category: '', price: '', image: '', description: '' });
  };
  

  return (
    
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre del producto" className="w-full border p-2" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Categoría" className="w-full border p-2" />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Precio" type="number" className="w-full border p-2" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="URL de la imagen" className="w-full border p-2" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Descripción" className="w-full border p-2" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Guardar producto</button>
      <div className="bg-red-100 p-4 text-black">
    Formulario de prueba
  </div>
    </form>
  );
}
