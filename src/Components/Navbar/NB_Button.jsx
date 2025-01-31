"use client";
export default function NB_Button({ children, ...props }) {
  return (
    <a
      href={props.link}
      className="bg-transparent font-normal p-10 pt-5 pb-5 max-2xl:pb-3 max-2xl:pt-3 rounded-full text-nowrap 
      hover:bg-white-100 hover:text-eft-red hover:font-bold transition-all duration-300 active:scale-95 active:bg-white-200 active:duration-150"
    >
      {children}
    </a>
  );
}
