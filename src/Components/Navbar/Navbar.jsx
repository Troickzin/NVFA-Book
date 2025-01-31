import NB_Button from "./NB_Button";

export default function Navbar() {
  return (
    <>
      <div className="w-fit h-fit bg-dark-50 flex gap-16 p-3 rounded-full fixed left-1/2 -translate-x-1/2 top-16 border border-white z-50 transition-all">
        <NB_Button link="#home">Home</NB_Button>
        <NB_Button link="#sobre">Sobre</NB_Button>
        <NB_Button link="#compre">Compre</NB_Button>
        <NB_Button link="#autora">Autora</NB_Button>
        <NB_Button link="#kindle">Kindle</NB_Button>
        <NB_Button link="#informações">Infos</NB_Button>
      </div>
    </>
  );
}
