import Image from "next/image";

export const UsService = () => {
  return (
    <div className="container md:px-6 mb-20">
      <div className="grid gap-6 md:gap-8">
        <div>
          <p className="text-center text-3xl font-bold text-black sm:text-4xl md:text-4xl mb-2">
            Nuestros servicios
          </p>
          <p className="md:text-xl text-center text-gray-600">
            Encuentre la solución que mejor se adapte a su negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="text-black bg-white relative overflow-hidden rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold">
              <Image
                src="/trcukImport.png"
                alt="Truck"
                width={42}
                height={42}
              />
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-base">
                Lo que fabricas o importas directo al consumidor
              </p>
            </div>
          </div>
          <div className="text-black bg-white relative overflow-hidden rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold">
              <Image src="/rocket.png" alt="Car" width={42} height={42} />
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-base">
                Potencia tus ventas en el canal de comercionalización de mayor
                crecimiento
              </p>
            </div>
          </div>
          <div className="text-black bg-white relative overflow-hidden rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold">
              <Image src="/Increment.png" alt="Home" width={42} height={42} />
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-base">
                Incrementá la visibilidad de tu marca y productos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
