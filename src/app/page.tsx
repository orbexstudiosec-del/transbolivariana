import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { QuoteSection } from "@/components/quote-section";
import {
  About,
  CallToAction,
  Coverage,
  Highlights,
  Infrastructure,
  Partners,
  Process,
  Services,
  Values,
} from "@/components/sections";
import { Stats } from "@/components/stats";
import { TopBar } from "@/components/top-bar";
import { Tracking } from "@/components/tracking";

export default function Home() {
  return (
    <>
      <JsonLd />
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <About />
        <Services />
        <Stats />
        <Infrastructure />
        <Process />
        <Coverage />
        <Values />
        <Partners />
        <CallToAction />
        <Tracking />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
