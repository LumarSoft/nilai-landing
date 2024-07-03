export const Contact = () => {
  return (
    <section className="w-full mt-32">
      <h2 className="text-2xl lg:text-4xl font-bold text-center">
        Contactanos
      </h2>
      <form className="flex flex-col gap-4 mt-12">
        <div className="flex md:gap-10 flex-col md:flex-row gap-4">
          <label className="flex flex-col w-full">
            Email
            <input className="py-2 rounded bg-neutral-400 px-2 text-black" />
          </label>
          <label className="flex flex-col w-full">
            Telefono
            <input className="py-2 rounded bg-neutral-400 px-2 text-black" />
          </label>
        </div>
        <label className="w-full flex flex-col">
          Mensaje
          <textarea className="py-2 rounded bg-neutral-400 px-2 text-black h-32" />
        </label>
        <button>Enviar</button>
      </form>
    </section>
  );
};
