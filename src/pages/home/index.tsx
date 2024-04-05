import { Navbar } from "@/components/index";
import { Hero, About, Playlist } from "./section/index";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Playlist />
    </>
  );
}

export default Home;
