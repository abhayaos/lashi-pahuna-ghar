import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-gold" />
            <span className="font-heading text-base font-semibold text-gray-900">Lashi Pahuna Ghar</span>
          </Link>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            A boutique hotel nestled in the serene hills, offering world-class
            hospitality with a touch of Nepali tradition.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-gray-900 font-semibold mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["Home", "/"],
              ["Rooms", "/rooms"],
              ["Menu", "/menu"],
              ["Place", "/place"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-gray-500 hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-gray-900 font-semibold mb-4 text-sm">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>Kalikot, Nepal</li>
            <li>+977 9858320081</li>
            <li>info@lashipahunaghar.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-gray-900 font-semibold mb-4 text-sm">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gold transition-colors text-gray-500 hover:text-white" aria-label="Facebook">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gold transition-colors text-gray-500 hover:text-white" aria-label="Instagram">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gold transition-colors text-gray-500 hover:text-white" aria-label="TripAdvisor">
              <SiTripadvisor className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-5 text-center text-xs text-gray-400">
        <p className="font-heading text-xs tracking-wider">&copy; {new Date().getFullYear()} Lashi Pahuna Ghar &mdash; Nepal Tourism Hotels</p>
      </div>
    </footer>
  );
}
