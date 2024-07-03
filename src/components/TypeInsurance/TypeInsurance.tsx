export const TypeInsurance = () => {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:gap-8">
          <div className="grid gap-2">
            <p className="text-2xl font-semibold text-center sm:text-xl">
              Nuestros servicios
            </p>
            <p className="md:text-2xl text-center">
              Encuentra la solucion adecuada para tu negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 text-center">
            <div className="text-white bg-black relative overflow-hidden rounded-lg p-6 border border-zinc-800 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-bold">
                img
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h3 className="text-xl font-semibold">
                  Lo que fábricas o importas directo al consumidor
                </h3>
              </div>
            </div>
            <div className="text-white bg-black relative overflow-hidden rounded-lg p-6 border border-zinc-800 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-bold">
                img
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h3 className="text-xl font-semibold">
                  Potencia tus ventas en el canal de comercialización de mayor
                  crecimiento{" "}
                </h3>
              </div>
            </div>
            <div className="text-white bg-black relative overflow-hidden rounded-lg p-6 border border-zinc-800 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-bold">
                img
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h3 className="text-xl font-semibold">
                  Incrementá la visibilidad de tu marca y productos
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
