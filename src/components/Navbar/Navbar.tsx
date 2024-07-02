
export const Navbar = () => {
  return (
    <div className="h-16 w-full flex justify-between px-4 md:px-28 2xl:px-80 2xl:h-28 items-center py-4 fixed z-20 bg-[#141414] shadow shadow-neutral-800">
      <a>
        <img src="/logo_completo.png" className="h-16 w-auto md:h-16 md:py-2 2xl:h-16 hidden lg:block"/>
        <img src="/logo.png" className="h-16 w-auto md:h-16 md:py-2 2xl:h-24 lg:hidden"/>
      </a>
      <div className="flex gap-2 md:gap-4 items-center">
        <a>
          <img src="/whatsapp.svg" className="h-10 w-10"/>
        </a>
        <a>
          <img src="/instagram.svg" className="h-10 w-10"/>
        </a>
      </div>
    </div>
  );
};
