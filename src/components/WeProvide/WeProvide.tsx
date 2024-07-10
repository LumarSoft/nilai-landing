import { FramerComponent } from "../Framer/FramerComponent";
import { FaShoppingCart, FaBullhorn, FaCogs } from "react-icons/fa";
import { Card } from "./Card";

export const WeProvide = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        viewport: { once: true, offset: 0.4 },
      },
    },
  };

  const itemAnimado = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="pt-20 lg:pb-20 flex flex-col gap-12">
      <FramerComponent
        style="flex flex-col items-center gap-4"
        animationInitial={{ opacity: 0, y: 50 }}
        animationWhileInView={{ opacity: 1, y: 0 }}
        animationTransition={{ duration: 0.3, delay: 0.1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <h3 className="font-semibold text-gray-800">Qué Ofrecemos</h3>
        <h2 className="text-2xl lg:text-4xl max-w-3xl text-center font-bold text-black">
          Brindamos la mejor solución para tu negocio
        </h2>
      </FramerComponent>

      <FramerComponent
        style="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        animationVariants={container}
        animationInitial="hidden"
        animationWhileInView="show"
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <Card
          icon={<FaShoppingCart className="text-4xl mb-4 text-blue-600" />}
          title="Comercialización Online"
          items={[
            "Diseño de Plan Estratégico",
            "Definición propósitos de proyecto de negocio",
            "Análisis interno y externo",
            "Establecimiento de objetivos",
            "Elaboración de presupuesto",
            "Desarrollo e implementación del plan de acción",
            "Capacitación RRHH sobre el nuevo entorno comercial",
          ]}
          itemAnimado={itemAnimado}
        />

        <Card
          icon={<FaBullhorn className="text-4xl mb-4 text-blue-600" />}
          title="Marketing"
          items={[
            "Diseño y puesta en marcha de sitios online",
            "Integraciones y sincronizaciones plataformas",
            "Diseño digital",
            "Community Management",
            "Generación de tráfico",
            "Redes sociales",
            "Ads",
          ]}
          itemAnimado={itemAnimado}
        />

        <Card
          icon={<FaCogs className="text-4xl mb-4 text-blue-600" />}
          title="Gestión"
          items={[
            "Altas/Modificaciones/Bajas de publicaciones",
            "Verificación publicaciones en sitios",
            "Gestión activa 24/7 Respuestas",
            "Procesamiento de pedidos",
            "Generación de etiquetas",
            "Coordinación Facturación",
            "Creación de colectas",
            "Trazabilidad de pedidos",
            "Seguimiento de stocks",
            "Controler de liquidaciones",
          ]}
          itemAnimado={itemAnimado}
        />
      </FramerComponent>
    </div>
  );
};
