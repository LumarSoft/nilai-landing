import { Hero } from "@/components/Hero/Hero";
import { Service1 } from "@/components/Service1/Service1";
import { Service2 } from "@/components/Service2/Service2";
import { WeProvide } from "@/components/WeProvide/WeProvide";
import { Footer } from "@/components/Footer/Footer";
import { UsService } from "@/components/UsService/UsService";
import { EmailJS } from "@/components/EmailJS/Email";
import NichoMercado from "@/components/NichoMercado/NichoMercado";

export default function Home() {
  return (
    <section>
      <main className="px-4 md:px-28 2xl:px-80 py-28 lg:py-48">
        <Hero />
        <UsService />
        <Service1 />
        <Service2 />
        <WeProvide />
        <NichoMercado />
        <EmailJS />
      </main>
      <Footer />
    </section>
  );
}
