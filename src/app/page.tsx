import Navbar from "@/components/Navbar/nav";
import Hero from "./hero/page";
import Service from "./services/service";
import Reviews from "./hero/reviews";
import Footer from "../components/Footer/footer";

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
