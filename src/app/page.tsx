import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Solutions } from "@/components/sections/Solutions";
import { Valores } from "@/components/sections/Valores";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-[#131428] selection:bg-[#0F62AC] selection:text-white">
      <Navbar />
      <Hero />
      <Method />
      <Solutions />
      <Valores />
      <Contact />
      <Footer />
    </main>
  );
}
