import Contact from "@/components/organism/Contact";
// import Projects from "../components/Projects";
import { Hero } from "../components/Hero";
import MainTemplates from "@/components/templates/MainTemplate";
import Speech from "@/components/atoms/Speech";
import { Testimonial } from "@/components/organism/Testimonial";
import Portfolio from "@/components/organism/Portfolio";
import JourneySoFarSummary from "@/components/organism/JourneySoFarSummary";
import LastCTA from "@/components/organism/LastCTA";
import About from "@/components/organism/About";
import WhyMe from "@/components/organism/WhyMe";
import CareerJourney from "@/components/organism/CareerJourney";
import BlurBgDesign from "@/components/atoms/BlurBgDesign";
import HeroNew from "@/components/organism/HeroNew";
import HomeHero from "@/components/organism/HomeHero";

export default function Home() {
  return (
    <MainTemplates>
      {/* <BlurBgDesign /> */}
      {/* <Hero /> */}
      <HomeHero />

      {/* <HeroNew /> */}
      <Speech />
      <Portfolio />
      <About />
      <WhyMe />
      {/* <Projects /> */}
      {/* <Testimonial2 /> */}
      <CareerJourney />
      <Testimonial />
      <JourneySoFarSummary />
      <Contact />
      {/* <LastCTA /> */}
    </MainTemplates>
  );
}
