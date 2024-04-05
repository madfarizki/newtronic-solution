import { Footer, Navbar } from "@/components/index";
import { Hero, About, Playlist } from "./section/index";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Playlist />
      <Footer />
    </>
  );
}

export default Home;
