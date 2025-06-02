import Navbar from "@/components/layout/nav";
import Hero from "../components/home/hero";
import Service from "../components/home/service";
import Reviews from "../components/home/reviews";
import Footer from "../components/layout/footer";

export default function Homepage() {
  return (
    <div className="scroll-smooth">
      <Navbar/>
      <Hero/>
      <Service/>
      <Reviews/>
      <Footer/>
    </div>
  );
}
