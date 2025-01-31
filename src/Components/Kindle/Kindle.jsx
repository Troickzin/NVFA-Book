import Image from "next/image";

export default function Kindle(props) {
  return (
    <>
      <div
        className={`mr-auto ml-24 animate-kindle-animation ${props.className}`}
      >
        <Image
          src="/images/kindle.png"
          width={620}
          height={530}
          alt="kindle reference"
          className="object-cover w-[58vh]"
        />
      </div>
    </>
  );
}
