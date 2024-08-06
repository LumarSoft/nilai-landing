export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 border-t border-zinc-200">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 justify-center items-center md:items-start">
        <div className="flex items-center">
          <img src="/logo-nilai.png" className="h-16 w-16 mt-5" />
          <h1><i><b>NILAI</b></i></h1>
        </div>
          <p className="text-sm text-gray-700 max-w-md max-sm:text-center">
            Somos especialistas en comercialización online, marketing digital y
            gestión de e-commerce. Ofrecemos soluciones integrales para impulsar
            tu negocio en el mundo digital, desde la planificación estratégica
            hasta la implementación y optimización de tu tienda online.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center md:items-end">
          <h4 className="text-lg font-semibold text-black">Contáctanos</h4>
          <div className="flex flex-col gap-2 items-center md:items-end">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-800">
                📞 (+54) 341 691 3003
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-800">
                ✉️ direccionNilai@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-800">🏢 Dirección acá</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-black">
        © 2024 Nilai - Developed by{" "}
        <a
          className="font-semibold"
          href="https://ar.linkedin.com/company/lumar-soft"
          target="_blank"
        >
          LumarSoft
        </a>
      </div>
    </footer>
  );
};
