export const EmailJS = () => {
  return (
    <section className="flex flex-col w-full mt-16 px-4">
      <div className="flex w-full max-w-6xl mx-auto flex-col items-center justify-center bg-white rounded-lg p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="w-full text-center mb-6">
          <p className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl mb-4">
            ¡Contáctanos!
          </p>
          <span className="text-gray-600">
            ¿Tiene alguna pregunta o necesita ayuda? Rellene el siguiente
            formulario y nos pondremos en contacto con usted lo antes posible.
          </span>
        </div>
        <form className="w-full space-y-6">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="expName"
            >
              Teléfono
            </label>
            <input
              className="text-gray-800 h-10 w-full rounded-md border border-gray-300 px-4 py-2 text-sm bg-white focus:outline-blue-500 focus:border-blue-500"
              placeholder="Ingresa tu teléfono"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="expEmail"
            >
              Email
            </label>
            <input
              className="text-gray-800 h-10 w-full rounded-md border border-gray-300 px-4 py-2 text-sm bg-white focus:outline-blue-500 focus:border-blue-500"
              placeholder="Ingresa tu email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="expMessage"
            >
              Mensaje
            </label>
            <textarea
              className="text-gray-800 w-full resize-none rounded-md border border-gray-300 px-4 py-2 text-sm bg-white focus:outline-blue-500 focus:border-blue-500"
              placeholder="Deje su mensaje aquí..."
            ></textarea>
          </div>
          <button
            className="h-10 w-full rounded-md bg-black text-white text-base font-medium transition-all duration-300 hover:bg-neutral-900 shadow-md hover:shadow-lg"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
