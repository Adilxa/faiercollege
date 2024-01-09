import Image from "next/image";
import Header from "@/components/Header";
import MainInformation from "@/components/Main";
import AboutCollege from "@/components/AboutCollege";
import WhyShould from "@/components/WhyUse";

export default function Home() {
  return (
    <>
      <Header />
      <MainInformation />
      <AboutCollege />
      <WhyShould />
    </>
  );
}
