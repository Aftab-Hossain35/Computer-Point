export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/IMG_9771.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          কম্পিউটার পয়েন্ট 
        </span>
        <h1 className="text-2xl md:text-4xl">আদালত রোড, জজকোর্ট কুমিল্লা</h1>
        <p className="text-lg md:text-2xl mb-6">
          কম্পিউটার শিখুন নিজেকে এগিয়ে রাখুন <br/> বেসিক টু এডভান্স লেভেল
        </p>
        <a
          href="#services"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          আরও জানুন
        </a>
      </div>
    </section>
  );
}
