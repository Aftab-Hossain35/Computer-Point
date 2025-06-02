import React from "react";
import Nav from "@/components/Navbar/nav"
import Service from "@/app/services/service"
import Hero from "@/app/hero/page"
import Reviews from "@/app/hero/reviews"
import Footer from "@/app/Footer/footer"

const page = () => {
  return (
  <div>
    <Nav/>
    <Hero/>
    <Service/>
    <Reviews/>
    <Footer/>
  </div>
  );
};

export default page;
