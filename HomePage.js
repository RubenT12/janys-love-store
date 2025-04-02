import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [...]; // Truncado por brevedad (ya lo tienes arriba)

export default function HomePage() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="rounded-2xl shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-t-2xl" />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-pink-600">${product.price.toLocaleString()} MXN</p>
            <Button className="mt-3 w-full">Agregar al carrito</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
