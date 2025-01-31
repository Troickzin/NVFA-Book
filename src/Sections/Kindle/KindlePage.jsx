import Button from "@/Components/Button/Button";
import Kindle from "@/Components/Kindle/Kindle";
import Image from "next/image";

export default function KindlePage() {
  return (
    <>
      <section className="w-screen h-full text-dark-100 pt-40 pb-40 overflow-x-hidden">
        <div className="flex items-center justify-center">
          <Kindle />
          <div className="flex flex-col items-center gap-9 ml-auto mr-40">
            <h2 className="text-2xl font-bold">Também disponível em ebook</h2>

            <Image
              src="/images/amazon.png"
              width={165}
              height={50}
              alt="amazon logo"
              className="object-cover"
            />
            <Button>Disponível no Kindle</Button>
          </div>
        </div>
      </section>
    </>
  );
}
