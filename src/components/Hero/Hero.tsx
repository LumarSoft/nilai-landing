import Image from "next/image";
import { FramerComponent } from "../Framer/FramerComponent";

export const Hero = () => {
  return (
    <section className="lg:pb-20 flex flex-col gap-6 lg:flex-row xl:gap-20 lg:justify-between">
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24 lg:max-w-lg"
        animationInitial={{ x: -200, opacity: 0 }}
        animationAnimate={{ x: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-bold md:text-5xl max-lg:text-center">
          Eleva tu negocio{" "}
          <b className="underline decoration-black">a otro nivel</b>
        </h1>
        <p className="text-neutral-700 max-lg:text-center">
          Somos <b>NILAI</b>, una empresa de servicios especializada en la{" "}
          <b>inserción y gestión de productos</b> en el mundo de negocios
          online. La misión del equipo es proveer soluciones llave en mano a
          fabricantes e importadores optimizando{" "}
          <b>costos, tiempo y recursos</b> humanos. Desarrollamos planes
          estratégicos ecommerce contemplando aspectos{" "}
          <b>
            comerciales, logísticos, stock, rentabilidad, finanzas y marketing
            digital
          </b>
          . Operamos las plataformas de los marketplaces más efectivos en ventas
          online en Argentina. Asesoramos, capacitamos y asistimos en forma{" "}
          <b>personaliza</b> para que la experiencia de comercialización digital
          sea exitosa.
        </p>
        <div className="max-lg:text-center">
          <button className="bg-black hover:bg-neutral-900 text-white py-3 w-1/2 rounded-md transition">
            Contactanos
          </button>
        </div>
      </FramerComponent>
      <FramerComponent
        style="w-full rounded-md lg:max-w-xl"
        animationInitial={{ x: 200, opacity: 0 }}
        animationAnimate={{ x: 0, opacity: 1 }}
      >
        <div className="relative w-full h-auto pt-10">
          <Image
            src="/amazon.jpeg"
            width={1440}
            height={960}
            objectFit="cover"
            objectPosition="center"
            alt="Imagen de manos contratando"
            className="rounded-md"
          />
        </div>
      </FramerComponent>
    </section>
  );
};
