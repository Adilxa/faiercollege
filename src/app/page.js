import Image from "next/image";
import Header from "@/components/Header";
import MainInformation from "@/components/Main";
import AboutCollege from "@/components/AboutCollege";
import WhyShould from "@/components/WhyUse";
import Directions from "@/components/Directions";
import Benefits from "@/components/Benefits";
import StartJourney from "@/components/StartJourney";
import Faq from "@/components/Faq";
import VideoSide from "@/components/VideoSide";
import Apply from "@/components/Apply";

export default function Home() {
  return (
    <>
      <Header />
      <MainInformation />
      <AboutCollege />
      <WhyShould />
      <Directions />
      <Benefits />
      <StartJourney />
      <Faq />
      <VideoSide />
      <Apply />
    </>
  );
}
