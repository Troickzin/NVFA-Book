"use client";

export default function Button({ children, ...props }) {
  return (
    <>
      {props.type == "red" ? (
        <>
          <button
            className={`
        relative bg-eft-red-button p-8 pt-3 pb-3 rounded-full text-nowrap transition-all text-white-100
        hover:scale-110 hover:drop-shadow-2xl hover:shadow-eft-red-button hover:bg-eft-red-button-hover
        active:scale-90 active:bg-eft-red-button-active
        max-2xl:pt-4 max-2xl:pb-4
        ${props.className} 
        `}
          >
            {children}
          </button>
        </>
      ) : (
        <>
          <button
            className={`
        relative bg-eft-yellow p-20 pt-5 pb-5 rounded-full text-nowrap transition-all text-dark-100
        hover:scale-110 hover:drop-shadow-2xl hover:shadow-eft-yellow hover:bg-eft-yellow-hover hover:text-white-100
        active:scale-90 active:bg-eft-yellow-active
        max-2xl:pt-4 max-2xl:pb-4
        ${props.className} 
        `}
          >
            {children}
          </button>
        </>
      )}
    </>
  );
}
