import Image from "next/image";

export default function Page_Details({ children, ...props }) {
  return (
    <>
      <div
        className={`${props.className} relative text-dark-100 max-xl:mt-10 z-30`}
      >
        <Image
          src="/images/page.png"
          width={743}
          height={417}
          alt="page detail description"
          className="relative w-[743px] h-[417px] max-xl:w-full max-xl:h-[240px] object-cover"
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-[35%] -translate-y-1/2 max-xl:top-[45%] max-w-[455px] max-h-[168px] max-xl:w-[290px]">
          <h1 className="font-medium text-2xl max-xl:text-base">Sinopse</h1>
          <p className="font-light text-justify max-xl:text-xs">
            Elise, uma jovem artista de 26 anos com TOC, busca refúgio na arte e
            em seus rituais após um trauma recente. Sua rotina muda com a
            chegada de Caio, um streamer enigmático e imprevisível, que desperta
            nela um lado curioso e aventureiro. Entre emoções intensas, os dois
            embarcam em uma jornada transformadora na vibrante Salvador.
          </p>
        </div>
      </div>
    </>
  );
}
