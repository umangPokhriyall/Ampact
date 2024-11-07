import TestimonialSection from "./components/TestimonialSection";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatIsIt from "./components/WhatIsIt";
import WhatWeOffer from "./components/WhatWeOffer";
import ServicesMain from "./components/ServicesMain";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsIt />
      <WhatWeOffer />
      <ServicesMain />
      <TestimonialSection />
      <Footer />

    </>
  );
}
