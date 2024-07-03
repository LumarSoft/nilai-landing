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
          <b className="underline decoration-black">al siguiente nivel</b>
        </h1>
        <p className="text-neutral-700 max-lg:text-center">
          Somos Nilai, una empresa especialista en comercio marketplace y{" "}
          <b>COMERCIALIZADORA B2C</b>. Nos dedicamos a ofrecerte soluciones
          innovadoras y personalizadas para potenciar tu negocio en el mundo
          digital. Con una amplia gama de productos y servicios, estamos aquí
          para ayudarte a alcanzar el éxito en el competitivo mercado actual.
          Nuestro compromiso es brindarte el mejor servicio y asesoramiento
          personalizado para que siempre te sientas <b>apoyado.</b>
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
            src="/manos.jpg"
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
