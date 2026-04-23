import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Manifesto } from "@/components/manifesto";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Services />
        <Manifesto />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
