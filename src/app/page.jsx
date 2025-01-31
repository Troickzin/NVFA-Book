import Navbar from "@/Components/Navbar/Navbar";
import HomePage from "@/Sections/Home/HomePage";
import KindlePage from "@/Sections/Kindle/KindlePage";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <KindlePage />
    </>
  );
}
