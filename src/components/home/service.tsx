// import Link from "next/link";
import Link from "next/link";
import React from "react";
// import Image from "next/image"

const servicesData = [
  {
    id: 1,
    image:"./compose-removebg-preview (1).png",
    title: "কম্পিউটার কম্পোজিং",
    btnText: "Learn More",
    path:"./compose"
  },
  {
    id: 2,
    image:"printing-removebg-preview.png",
    title: "স্ক্যানিং ও প্রিন্টিং",
    btnText: "Learn More",
    path:"./printing"
  },
  {
    id: 3,
    image:"customization-icon-from-business-bicolor-set-vector-5415598-removebg-preview (1).png",
    title: "ছবি কাষ্টমাইজেশন",
    btnText: "Learn More",
    path:"./customization",
  },
  {
    id: 4,
    title: "কম্পিউটার প্রশিক্ষন",
    image:"course-removebg-preview.png",
    btnText: "Learn More",
    path:"./course",
  },
  {
    id: 5,
    title: "অনলাইন সেবাসমূহ",
    image:"online-removebg-preview.png",
    btnText: "Learn More",
    path:"./online",
  }
];

const Service = () => {
  return (
    <>
  <div className="pt-16 pb-16" id="service">
    <div className="w-[80%] mx-auto">
    {/* /* Section Heading */}
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-lg sm:text-xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent uppercase 0.5cm">
            What we provide
           </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl mt-1 font-bold text-gray-800">
            Provide Customer Service with Satisfaction
          </h1>
        </div>
     
      </div>
    </div>
  </div>
  
    <div className="py-16 px-4 sm:px-6 lg:px-8">
     <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 underline">আমাদের সেবাসমূহ</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {servicesData.map((service, ind) => (
          <Link href={service.path} key={ind} className="p-6 w-70 flex flex-col items-center shadow hover:shadow-lg rounded-xl bg-gray-50 group transtion-all duration-500 hover:bg-gradient-to-r from-purple-600 to-blue-500 relative hover:scale-105">
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 mb-3 object-contain"
            />
            <p className="text-blue-700 font-semibold text-xl group-hover:text-white">{service.title}</p>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Service;
