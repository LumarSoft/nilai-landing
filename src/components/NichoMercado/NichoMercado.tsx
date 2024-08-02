import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/components/NichoMercado/categoryData";

const NichoMercado = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 font-sans bg-white text-black">
      <h1 className="text-4xl font-bold text-center text-black mb-12">
        Nichos de Mercado para tu Negocio Online Escalable
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category: any, index: any) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default NichoMercado;
