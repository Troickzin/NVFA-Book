import Image from "next/image";
import Button from "../Button/Button";

export default function Title({ children, ...props }) {
  return (
    <div className={`${props.className}`}>
      <div className="relative m-auto max-2xl:mr-52 max-xl:mr-auto flex flex-col justify-center items-center gap-4 transition-all z-30">
        <div className="relative">
          <Image
            src="/images/logo_big.png"
            width={501}
            height={319}
            alt="book name"
            className="h-[35vh] w-[50vh] max-xl:h-[20vh] max-xl:w-[35vh] object-cover"
          />
          <p className="text-center italic max-xl:hidden">Livro 1</p>
        </div>
        <Button className="max-xl:hidden">Compre o livro</Button>
      </div>
    </div>
  );
}
