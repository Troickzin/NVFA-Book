"use client";
export default function AutoraPage() {
  return (
    <>
      <div className="w-full bg-eft-red-100 max-lg:bg-dark-300">
        <div className="m-auto flex flex-col pt-12 pb-24 items-center lg:hidden">
          <div className="font-medium ml-5 mr-auto mb-6">
            <h1>Autora</h1>
          </div>
          <div className="m-auto flex  max-md:flex-col gap-10">
            <div className="m-auto">
              <img
                src="/images/autora.jpeg"
                alt="autora image"
                width={378}
                height={392}
                className="object-cover size-48"
              />
            </div>
            <div className="flex flex-col gap-8 max-w-64 m-auto">
              <h1 className="text-xl font-bold text-center">Thuanne Ramos</h1>
              <p className="text-center text-sm">
                Baiana, publicitária, designer UX e escritora. Está lançando o
                seu primeiro romance intitulado “Não Vamos Falar de Amor”.
              </p>
            </div>
          </div>
        </div>

        <div className="m-auto max-w-[1920px] flex pt-12 pb-12 items-center max-lg:hidden">
          <div className="flex flex-col gap-12 max-w-3xl ml-16 mr-auto pr-10">
            <h1 className="text-4xl font-bold">Thuanne Ramos</h1>
            <p className="text-justify">
              Baiana, publicitária, designer UX e escritora. Está lançando o seu
              primeiro romance intitulado “Não Vamos Falar de Amor”.
            </p>
            <button className="border p-16 pt-4 pb-4 border-white rounded-full transition-all text-xl flex w-fit">
              Siga o meu perfil na amazon
            </button>
          </div>
          <div className="mr-48 ml-auto">
            <img
              src="/images/autora.jpeg"
              alt="autora image"
              width={378}
              height={392}
              className="object-cover w-80 h-80 min-w-64 min-h-64"
            />
          </div>
        </div>
      </div>
    </>
  );
}
