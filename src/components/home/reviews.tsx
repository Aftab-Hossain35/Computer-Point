export default function Reviews() {
  const testimonials = [
    {
      name: "মো. হাসান",
      review: "সার্ভিস অসাধারণ! টাইপিং একদম নিখুঁত এবং দ্রুত ডেলিভারি পেয়েছি।",
      rating: 5,
      img: "/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo.png", // Place image in /public
    },
    {
      name: "রাহেলা খাতুন",
      review: "সিভি তৈরি করিয়েছিলাম, খুব প্রফেশনাল কাজ হয়েছে। Highly recommended!",
      rating: 4,
      img: "/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo.png",
    },
    {
      name: "তানভীর আহমেদ",
      review: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
      rating: 5,
      img: "/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo.png",
    },
        {
      name: "মো: সিয়াম",
      review: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
      rating: 4,
      img: "/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo.png",
    },
        {
      name: "মো: সামির",
      review: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
      rating: 5,
      img: "/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo.png",
    },
        {
      name: "ইউসুফ হাসান",
      review: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
      rating: 5,
      img: "/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-12" id="reviews">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700">কাস্টমার রিভিউ</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-blue-600">{t.name}</h4>
                  <div className="text-purple-400">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    <div className="bg-blue-900 text-purple-300 py-12 mt-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="">
            <h2 className="text-4xl font-bold ">7</h2>
            <p className="mt-2">Years of services</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">10,000+</h2>
            <p className="mt-2">Works done</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">650+</h2>
            <p className="mt-2">Students</p>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="w-full h-[450px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4460.477798177007!2d91.1790456455194!3d23.47319985188523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f2d327c81d9%3A0x7c33dc6cca762477!2sComputer%20Point!5e0!3m2!1sen!2sbd!4v1748447360256!5m2!1sen!2sbd" width="600" height="550" className="border-0 w-full h-full" loading="lazy"></iframe>
      </div>
    </section>
  );
}
