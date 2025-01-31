import NB_Button from "./NB_Button";
import { IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <nav className="w-fit h-fit bg-dark-50 flex gap-16 p-3 rounded-full fixed left-1/2 -translate-x-1/2 top-16 border border-white z-50 transition-all max-xl:hidden">
        <NB_Button link="#home">Home</NB_Button>
        <NB_Button link="#sobre">Sobre</NB_Button>
        <NB_Button link="#compre">Compre</NB_Button>
        <NB_Button link="#autora">Autora</NB_Button>
        <NB_Button link="#kindle">Kindle</NB_Button>
        <NB_Button link="#informações">Infos</NB_Button>
      </nav>
      <nav className="bg-dark-300 xl:hidden w-full h-12 flex items-center fixed z-50">
        <h1 className="text-xs text-nowrap flex font-medium italic ml-6 mr-auto">
          Thuanne Ramos
        </h1>
        <IoMenuOutline className="mr-6 ml-auto size-10 text-eft-yellow-100" />
      </nav>
    </>
  );
}
