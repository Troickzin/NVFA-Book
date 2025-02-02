import Image from "next/image";

export default function Book(props) {
  return (
    <>
      <div
        className={`absolute ${props.className} bottom-0 right-0 overflow-hidden xl:translate-x-8 rotate-1 transition-all animate-book-animation flex justify-center items-center lg:w-[80vh] lg:h-[80vh]`}
      >
        <img
          src="/images/book.png"
          width={602}
          height={874}
          alt="book image"
          className="object-cover w-[56vh] h-[80vh] max-lg:w-[60vh] max-lg:h-[60vh] hover:transform-[rotate(6deg)] transition-all duration-500 "
        />
      </div>
    </>
  );
}
