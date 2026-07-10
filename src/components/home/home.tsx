import Header from "@/components/home/home-comps/Header";
import Banner from "@/components/home/home-comps/Banner";
import Curriculum from "@/components/home/home-comps/Curriculum";
import Benefits from "@/components/home/home-comps/Benefits";
import AboutUs from "@/components/home/home-comps/AboutUs";
import Testimonials from "@/components/home/home-comps/Testimonials";
import Partners from "@/components/home/home-comps/Partners";
// import Registration from "@/components/home/home-comps/Registration";
import ContactUs from "@/components/home/home-comps/ContactUs";
import Footer from "@/components/home/home-comps/Footer";
// import CurriculumPage from "../curriculum/curriculum";
import PricingPage from "./home-comps/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner targetDate="2026-09-01T00:00:00" />
        <Partners />
        <Curriculum />
        {/* <CurriculumPage /> */}
        <Benefits />
        <AboutUs />
        <Testimonials />
        {/* <Registration /> */}
        <PricingPage />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
