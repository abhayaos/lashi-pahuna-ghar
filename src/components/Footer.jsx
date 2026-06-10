import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            🏛 Lashi Pahuna Ghar
          </h3>
          <p className="text-sm leading-relaxed">
            A boutique hotel nestled in the serene hills, offering world-class
            hospitality with a touch of Nepali tradition.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["Rooms", "/rooms"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-amber-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Pokhara, Nepal</li>
            <li>+977 1 4XXXXXX</li>
            <li>info@lashipahunaghar.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {["Facebook", "Instagram", "TripAdvisor"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-amber-600 transition text-xs text-white"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Lashi Pahuna Ghar. All rights reserved.
      </div>
    </footer>
  );
}
