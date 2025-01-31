import Image from "next/image";

export default function Book() {
  return (
    <>
      <div className="absolute bottom-0 right-0 overflow-hidden translate-x-8 rotate-1 transition-all animate-book-animation">
        <Image
          src="/images/book.png"
          width={602}
          height={874}
          alt="book image"
          className="object-cover w-[80vh]"
        />
      </div>
    </>
  );
}
