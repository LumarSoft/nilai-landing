import { FramerComponent } from "../Framer/FramerComponent";

export const Service1 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 xl:gap-20 lg:justify-between ">
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24  lg:max-w-lg"
        animationInitial={{ x: -200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <h3 className="font-semibold">
          El Mercado Online en argentina
        </h3>
        <h2 className="text-2xl font-bold">
          Soluciones avanzadas para hacer crecer tu negocio online
        </h2>
        <ul className="text-neutral-800">
          <li>
            234 millones de órdenes de compra, un aumento del 11% respecto al
            año anterior.
          </li>
          <li>
            Se vendieron 489 millones de productos, un crecimiento del 16%
            frente a 2022.
          </li>
          <li>El ticket promedio por orden de compra fue de $33.457.</li>
          <li>
            La facturación total superó los siete billones de pesos, con un
            crecimiento del 175% respecto a 2022.
          </li>
          <li>
            Se anexaron 1,4 millones de nuevos compradores, llegando a un total
            23.247.500 compradores.
          </li>
          <li>6 de cada 10 compradores efectúan una compra por mes.</li>
        </ul>
      </FramerComponent>
      <FramerComponent
        style="w-full h-96 bg-neutral-400 rounded-md lg:max-w-xl lg:h-[40rem]"
        animationInitial={{ x: 200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <>aca iria la imagen</>
      </FramerComponent>
    </div>
  );
};
