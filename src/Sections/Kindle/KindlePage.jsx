import Button from "@/Components/Button/Button";
import Kindle from "@/Components/Kindle/Kindle";
import Image from "next/image";

export default function KindlePage() {
  return (
    <>
      <section className="w-screen h-full text-dark-100 pt-40 pb-40 max-xl:pt-10 max-xl:pb-20 overflow-x-hidden">
        <div className="flex max-xl:flex-col items-center justify-center max-xl:pl-20 max-xl:pr-20 max-xl:gap-6">
          <Image
            src="/images/amazon.png"
            width={120}
            height={35}
            alt="amazon logo"
            className="object-cover xl:hidden"
          />
          <Kindle className="max-xl:ml-auto max-xl:mr-auto" />
          <Button type="red">Disponível no Kindle</Button>
          <div className="flex flex-col items-center gap-9 ml-auto mr-40 max-xl:hidden">
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
