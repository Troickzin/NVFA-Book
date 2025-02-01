import Navbar from "@/Components/Navbar/Navbar";
import AutoraPage from "@/Sections/Autora/AutoraPage";
import Footer from "@/Sections/Footer/Footer";
import HomePage from "@/Sections/Home/HomePage";
import KindlePage from "@/Sections/Kindle/KindlePage";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <KindlePage />
      <AutoraPage />
      <Footer />
    </>
  );
}
