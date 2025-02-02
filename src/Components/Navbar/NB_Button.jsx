"use client";
export default function NB_Button({ children, ...props }) {
  return (
    <a
      href={props.link}
      className="
      bg-transparent font-normal p-5 hover:p-7 hover:pb-4 hover:pt-4 pt-4 pb-4 max-2xl:pb-3 max-2xl:pt-3 rounded-full text-nowrap relative text-gray-200 hover:text-white transition-all text-lg
      before:contents-[''] before:content before:mr-2 before:bg-transparent before:absolute before:bottom-2 before:left-1/2 before:duration-300
      before:w-0 before:h-0.5 before:transition-all
      hover:before:-bottom-0 hover:before:bg-white hover:before:w-full
      before:-translate-y-1/2 hover:before:-translate-y-0 not-[active]:hover:before:left-0
      active:before:bg-eft-blue-100
      active:before:bottom-1
      "
    >
      {children}
    </a>
  );
}
