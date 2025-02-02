import Book from "@/Components/Book/Book";
import Button from "@/Components/Button/Button";
import Page_Details from "@/Components/Page_Details/Page_Details";
import Title from "@/Components/Title/Title";

export default function HomePage() {
  return (
    <>
      <section className="w-screen h-fit relative" id="home">
        <div className="bg-linear-to-b from-eft-blue to-eft-blue-400 w-full h-[75vh] max-xl:h-[95%] max-xl:min-h-screen absolute top-0 left-0">
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
          <div className="m-auto max-w-[1920px] relative">
            <div className="w-fit pt-40 ml-10 max-2xl:pt-32 max-2xl:ml-0 max-xl:pt-16 flex flex-col justify-center gap-10 max-xl:gap-0 items-center transition-all relative max-xl:m-auto">
              <Title />
              <div className="w-full h-fit overflow-hidden">
                <Book className="xl:hidden relative" />
              </div>
              <Button className="xl:hidden bg-eft-red-button">
                Compre o livro
              </Button>
              <Page_Details />
            </div>
          </div>
        </div>
        <div className="absolute w-full h-screen top-0 left-0 overflow-hidden max-xl:hidden">
          <div className="m-auto max-w-[1920px] h-screen overflow-hidden relative">
            <Book />
          </div>
        </div>
      </section>
    </>
  );
}
