import Nav from "@/components/Navbar/nav"
import Service from "./services/service"
import Hero from "./Hero/page"
import Reviews from "./Hero/reviews"

export default function Homepage() {
  return (
    <div className="scroll-smooth">
      <Nav/>
      <Hero/>
      <Service/>
      <Reviews/>
    </div>
  );
}
