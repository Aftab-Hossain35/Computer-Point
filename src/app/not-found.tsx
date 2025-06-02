import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-purple-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">পেইজ খুঁজে পাওয়া যায়নি</h2>
      <p className="text-gray-600 mb-6 text-center">
        আপনি যে পেইজটি খুঁজছেন সেটি আমাদের সার্ভারে নেই।
      </p>
      <Link href="/"className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition">
          হোম পেইজে ফিরে যান
      </Link>
    </div>
  );
}
