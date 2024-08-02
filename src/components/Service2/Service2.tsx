import Image from "next/image";
import { FramerComponent } from "../Framer/FramerComponent";

export const Service2 = () => {
  const ecommerceStats = [
    "Las tarjetas de crédito siguen siendo el medio de pago preferido (89% de las ventas).",
    "El envío a domicilio es la opción más utilizada, representando el 60% en la distribución de productos.",
    "84% de los compradores offline buscó en alguna fuente online.",
    "Más de 57.000 pymes se sumaron a Mercado Libre en los últimos dos años.",
    "Las pymes emplearon 2,3 millones promedio de trabajadores asociados a las plataformas online.",
    "Según el análisis de PCMI, el mercado e-commerce en Argentina crecerá un 26% en 2023, alcanzando los US$28.200 millones.",
    "La tendencia para el ecommerce entre el 2023 y 2026 sostiene un crecimiento anual del 22%.",
    "El 38% de los emprendedores argentinos tiene un negocio online como fuente de ingreso extra.",
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 xl:gap-20 lg:justify-between">
      <FramerComponent
        style="w-full h-96 lg:h-[40rem] lg:order-last lg:max-w-xl overflow-hidden"
        animationInitial={{ y: -50, opacity: 0 }}
        animationWhileInView={{ y: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Image
            className="object-cover rounded-md shadow-lg"
            src="/Ecommerce.jpg"
            alt="Despacho de E-commerce"
            width={700}
            height={700}
          />
        </div>
      </FramerComponent>
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24 lg:max-w-lg"
        animationInitial={{ y: 50, opacity: 0 }}
        animationWhileInView={{ y: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <ul className="text-neutral-800 space-y-2">
          {ecommerceStats.map((stat, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-black">•</span>
              {stat}
            </li>
          ))}
        </ul>
        <span className="font-bold text-sm text-neutral-600">
          Fuente: Cace - Tienda Nube - Mercado Libre
        </span>
      </FramerComponent>
    </div>
  );
};
