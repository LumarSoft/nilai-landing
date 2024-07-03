import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 justify-center items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">
              Información
            </span>
          </div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos
            temporibus ad quisquam odio nihil ipsum corporis eaque ex ipsam
            tempora commodi harum, distinctio dolor voluptatum magni impedit!
            Perspiciatis, doloribus.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h4 className="text-lg font-semibold text-white">Contacto</h4>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">(+54) 9341 569 0470</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">Ejemplo@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">
                balbo 4150, Rosario, Santa Fe, Argentina
              </span>
            </div>
          </div>
        </div>
        <a href="https://www.argentina.gob.ar/superintendencia-de-seguros">
          {" "}
          <Image
            src="/ssn-logo.png"
            width={280}
            height={280}
            alt="Imagen del logo de la Superintendencia de Seguros de la Nación"
          />
        </a>
      </div>
    </footer>
  );
};
