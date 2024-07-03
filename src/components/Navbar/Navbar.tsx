
export const Navbar = () => {
  return (
    <div className="h-16 w-full flex justify-between px-4 md:px-28 2xl:px-80 2xl:h-28 items-center py-4 fixed z-20 bg-white shadow-lg border-b">
      <a className="">
       Logo de Nilai
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
