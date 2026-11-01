import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import YellowPrideBanner from "@/components/sections/YellowPrideBanner";
import Ticker from "@/components/sections/Ticker";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import KmsSimulator from "@/components/sections/KmsSimulator";
import Pillars from "@/components/sections/Pillars";
import Roles from "@/components/sections/Roles";
import Commodities from "@/components/sections/Commodities";
import Impact from "@/components/sections/Impact";
import Triad from "@/components/sections/Triad";
import ClosingCta from "@/components/sections/ClosingCta";
import StudioChatWidget from "@/components/ui/StudioChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7F8F8]">
        <Hero />
        <YellowPrideBanner />
        <Ticker />
        <Problem />
        <HowItWorks />
        <KmsSimulator />
        <Pillars />
        <Roles />
        <Commodities />
        <Impact />
        <Triad />
        <ClosingCta />
      </main>
      <Footer />
      <StudioChatWidget />
    </>
  );
}
