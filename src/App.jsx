import React from 'react';

const products = [
  {
    id: 1,
    name: "Coach For Men Eau de Toilette 100ml",
    category: "Perfume",
    price: 1800,
    description: "Fragancia masculina con notas frescas y amaderadas. Ideal para uso diario.",
    image: "/images/coach.jpg"
  },
  {
    id: 2,
    name: "Paris Hilton for Women Eau de Parfum 100ml",
    category: "Perfume",
    price: 850,
    description: "Aroma frutal y floral. Perfecto para una mujer coqueta y moderna.",
    image: "/images/paris.jpg"
  },
  {
    id: 3,
    name: "Victoria's Secret Pure Seduction 250ml",
    category: "Victorias Secret",
    price: 480,
    description: "Mezcla seductora de ciruela roja y fresia. Deja una fragancia irresistible.",
    image: "/images/pure.jpg"
  },
  {
    id: 4,
    name: "Set de 12 Carritos Hot Wheels",
    category: "Juguetes",
    price: 210,
    description: "12 carritos de metal con diseños variados. Colección básica para niños.",
    image: "/images/hotwheels.jpg"
  },
  {
    id: 5,
    name: "Kit de Slime Brillante Cra-Z-Slimy",
    category: "Juguetes",
    price: 280,
    description: "Kit para hacer slime brillante, ideal para jugar y estimular creatividad.",
    image: "/images/slime.jpg"
  },
  {
    id: 6,
    name: "Figura de Superman DC 12 pulgadas",
    category: "Juguetes",
    price: 320,
    description: "Figura de acción articulada, excelente para fans del universo DC Comics.",
    image: "/images/superman.jpg"
  }
];

function App() {
  return (
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <h2 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{product.name}</h2>
          <p style={{ fontSize: '0.9rem', color: '#555' }}>{product.description}</p>
          <strong style={{ color: '#e91e63' }}>${product.price.toLocaleString()} MXN</strong>
        </div>
      ))}
    </div>
  );
}

export default App;
