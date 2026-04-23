import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Manifesto } from "@/components/manifesto";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <PainPoints />
        <Services />
        <Manifesto />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
