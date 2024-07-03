import { FramerComponent } from "../Framer/FramerComponent";

export const Service2 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 xl:gap-20 lg:justify-between ">
      <FramerComponent
        style="w-full h-96 bg-neutral-400 rounded-md lg:max-w-xl lg:h-[40rem]"
        animationInitial={{ x: -200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <>aca iria la imagen</>
      </FramerComponent>
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24  lg:max-w-lg"
        animationInitial={{ x: 200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <ul className="text-neutral-800">
          <li>
            Las tarjetas de crédito siguen siendo el medio de pago preferido
            (89% de las ventas).
          </li>
          <li>
            El envío a domicilio es la opción más utilizada, representando el
            60% en la distribución de productos.
          </li>
          <li>84% de los compradores offline buscó en alguna fuente online.</li>
          <li>
            Más de 57.000 pymes se sumaron a Mercado Libre en los últimos dos
            años.
          </li>
          <li>
            Las pymes emplearon 2,3 millones promedio de trabajadores asociados
            a las plataformas online.
          </li>
          <li>
            Según el análisis de PCMI, el mercado e-commerce en Argentina
            crecerá un 26% en 2023, alcanzando los US$28.200 millones.
          </li>
          <li>
            La tendencia para el ecommerce entre el 2023 y 2026 sostiene un
            crecimiento anual del 22%.
          </li>
          <li>
            El 38% de los emprendedores argentinos tiene un negocio online como
            fuente de ingreso extra.
          </li>
        </ul>
        <span className="font-bold">Fuente: Cace - Tienda Nube - Mercado Libre</span>
      </FramerComponent>
    </div>
  );
};
