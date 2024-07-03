import { FramerComponent } from "../Framer/FramerComponent";

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
        <h3 className="font-semibold">Qué Ofrecemos</h3>
        <h2 className="text-2xl lg:text-4xl max-w-3xl text-center font-bold">
          Brindamos la mejor solución para tu negocio
        </h2>
      </FramerComponent>
      <FramerComponent
        style="flex flex-col gap-6 lg:flex-row items-center"
        animationVariants={container}
        animationInitial="hidden"
        animationWhileInView="show"
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <FramerComponent
          style="flex flex-col p-6 h-96 w-full bg-neutral-500 rounded-md hover:shadow-[0_8px_20px_8px_black] transition-shadow duration-300"
          key={1}
          animationInitial={{ opacity: 0, y: 50 }}
          animationVariants={itemAnimado}
        >
          <h3 className="font-semibold text-center mb-4">
            Comercialización Online
          </h3>

          <ul className="text-white">
            <li>Diseño de Plan Estratégico</li>
            <li>Definición propósitos de proyecto de negocio</li>
            <li>Análisis interno y externo</li>
            <li>Establecimiento de objetivos</li>
            <li>Elaboración de presupuesto</li>
            <li>Desarrollo e implementación del plan de acción</li>
            <li>Capacitación RRHH sobre el nuevo entorno comercial</li>
          </ul>
        </FramerComponent>
        <FramerComponent
          style="flex flex-col p-6 w-full h-96  bg-neutral-500 rounded-md hover:shadow-[0_8px_20px_8px_black] transition-shadow duration-300"
          key={2}
          animationInitial={{ opacity: 0, y: 50 }}
          animationVariants={itemAnimado}
        >
          <h3 className="font-semibold text-center mb-4">
            Marketing
          </h3>

          <ul className="text-white">
            <li>Diseño y puesta en marcha de sitios online</li>
            <li>Integraciones y sincronizaciones plataformas</li>
            <li>Diseño digital</li>
            <li>Comunity</li>
            <li>Generación de tráfico</li>
            <li>Redes sociales</li>
            <li>Ads</li>
          </ul>
        </FramerComponent>
        <FramerComponent
          style="flex flex-col p-6 w-full h-96 bg-neutral-500 rounded-md hover:shadow-[0_8px_20px_8px_black] transition-shadow duration-300"
          key={3}
          animationInitial={{ opacity: 0, y: 50 }}
          animationVariants={itemAnimado}
        >
          <h3 className="font-semibold text-center mb-4">
            Gestión
          </h3>
            <ul className="text-white">
              <li>Altas/Modificaciones/Bajas de publicaciones</li>
              <li>Verificación publicaciones en sitios</li>
              <li>Gestión activa 24/7 Respuestas (consultas/preguntas)</li>
              <li>Procesamiento de pedidos</li>
              <li>Generación de etiquetas</li>
              <li>Coordinación Facturación</li>
              <li>Creación de colectas</li>
              <li>Trazabilidad de pedidos</li>
              <li>Seguimiento de stocks</li>
              <li>Controler de liquidaciones</li>
            </ul>
        </FramerComponent>
      </FramerComponent>
    </div>
  );
};

<div className="h-auto"></div>;
