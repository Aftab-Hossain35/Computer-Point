import Link from "next/link";
import { FaFacebookF, FaEnvelope, FaPhoneAlt,} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className=" text-white text-center py-8 bg-blue-950">
      {/* Top Menu */}
      <div className="space-x-4 text-sm font-semibold">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/services" className="hover:text-blue-400">Services</Link>
        <Link href="/contact" className="hover:text-blue-400">Location</Link>
        <Link href="/location" className="hover:text-blue-400">Contact</Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-4">
        <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-purple-400">
          <FaFacebookF />
        </a>
        <a href="mailto:computerpoint15081978@gmail.com" className="bg-blue-600 text-white p-3 rounded-full hover:bg-purple-400">
          <FaEnvelope />
        </a>
        <a href="tel:01731641688" className="bg-blue-600 text-white p-3 rounded-full hover:bg-purple-400">
          <FaPhoneAlt />
        </a>
      </div>

      {/* Contact Info */}
      <div className="text-purple-300 font-semibold mb-1">
        01731-641688 / 01859-732189
      </div>
      <div className="text-purple-300 font-semibold mb-4">
        computerpoint15081978@gmail.com
      </div>

      {/* Developer Credit */}
      <p className="text-sm text-gray-300 ">
        Developed by <span className="text-purple-300 font-medium">Aftab Hossain</span>
      </p>
    </footer>
  );
}
