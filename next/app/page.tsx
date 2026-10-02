import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Squad from "@/components/Squad";
import FilmSection from "@/components/FilmSection";
import Sim2Real from "@/components/Sim2Real";
import Tricks from "@/components/Tricks";
import Colourway from "@/components/Colourway";
import Wild from "@/components/Wild";
import Packs from "@/components/Packs";
import Specs from "@/components/Specs";
import OpenSource from "@/components/OpenSource";
import Discord from "@/components/Discord";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Squad />
        <FilmSection />
        <Sim2Real />
        <Tricks />
        <Colourway />
        <Wild />
        <Packs />
        <Specs />
        <OpenSource />
        <Discord />
        <FinalCta />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
