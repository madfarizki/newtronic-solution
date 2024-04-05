import { Navbar } from "@/components/index";
import { Hero, About } from "./section/index";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default Home;
