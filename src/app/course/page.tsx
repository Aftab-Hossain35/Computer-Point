import React from "react";

const course = () => {
  return (
  <>
        {/* Header section */}
  <div className="relative">
      <img
      src="./starprints-typing.png"
      alt="Keyboard"
      className="w-full h-64 object-cover"
      />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold text-blue-700">কম্পিউটার পয়েন্ট</h1>
      <h2 className="text-2xl mt-2">হোম-পেইজ</h2>
    </div>

  {/* Curved bottom SVG */}
    <svg
    className="absolute bottom-0 w-full"
    viewBox="0 0 1440 100"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
      fill="white"
      d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
    />
  </svg>
  </div>


      {/* Content box */}
      <div className="max-w-6xl mx-auto my-10 border border-gray-400 rounded overflow-hidden">
        <div className="bg-blue-700 text-gray-100 p-8 text-2xl font-bold">
          কম্পিউটার প্রশিক্ষন
        </div>
        <ul className="divide-y divide-gray-200 ">
          {[
            "১/ কম্পিউটার হাতেখড়ি কোর্স করানো হয়",
            "২/ অফিসিয়াল কোর্স করানো হয়",
            "৩/ চাকুরীর জন্য বেসিক টু এডভান্স কোর্স করানো হয়",
            "৪/ মাইত্রেুাসফট অফিস,ওয়ার্ড,এক্সেল শিখানো হয়",
            "৫/ ফটোশপ এর যাবতীয় কাজ শেখানো হয় ",
            "৬/ প্রাকটিক্যাল কাজ করার মাধ্যমে দক্ষতা বৃদ্ধি করার সুবিধা ",
            "৭/ কোর্স শেষ করার পরও কম্পিউটার সম্পর্কিত সমস্যা সমাধানের সুযোগ ",
            "৮/ ডিজিটাল মার্কেটিং ",
          ].map((item, idx) => (
            <li key={idx} className="p-4 font-semibold text-xl text-gray-800">
              {item}
            </li>
          ))}
        </ul>
      </div>
  </>
);
};

export default course;