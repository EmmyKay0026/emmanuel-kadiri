import Contact from "@/components/organism/Contact";
import Projects from "../components/Projects";
import { Hero } from "../components/Hero";
import MainTemplates from "@/components/templates/MainTemplate";
import Speech from "@/components/atoms/Speech";
import { Testimonial } from "@/components/organism/Testimonial";
import Portfolio from "@/components/organism/Portfolio";
import JourneySoFarSummary from "@/components/organism/JourneySoFarSummary";
import LastCTA from "@/components/organism/LastCTA";

export default function Home() {
  return (
    <MainTemplates>
      <Hero />
      <Speech />
      {/* <About /> */}
      <Portfolio />
      <Projects />
      {/* <Testimonial2 /> */}
      <Testimonial />
      <JourneySoFarSummary />
      <Contact />
      <LastCTA />
    </MainTemplates>
  );
}
