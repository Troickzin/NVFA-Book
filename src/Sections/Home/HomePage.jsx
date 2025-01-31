import Book from "@/Components/Book/Book";
import Page_Details from "@/Components/Page_Details/Page_Details";
import Title from "@/Components/Title/Title";

export default function HomePage() {
  return (
    <>
      <section className="w-screen h-fit relative" id="home">
        <div className="bg-eft-blue w-full h-[75vh] absolute top-0 left-0">
          <div
            className="w-full h-full animate-bg-detail-animation"
            style={{
              background: "url(/images/background_details.png)",
              backgroundRepeat: "repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.4",
            }}
          />
        </div>

        <div className="w-screen h-fit relative">
          <div className="w-fit pt-40 ml-10 max-2xl:pt-32 max-2xl:ml-0 flex flex-col justify-center items-center gap-10 transition-all relative">
            <Title />
            <Page_Details />
          </div>
        </div>
        <div className="absolute w-full h-screen top-0 left-0 overflow-hidden">
          <Book />
        </div>
      </section>
    </>
  );
}
