import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Zap } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/menu", label: "Menu" },
  { to: "/place", label: "Place" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-gold" />
          <span className="font-heading text-lg font-bold text-gray-900">Lashi Pahuna Ghar</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-gold" : "text-gray-500 hover:text-gray-900"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-gold text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-goldDark transition"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span>{open ? "Close" : "Menu"}</span>
          <Zap className="w-4 h-4" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium tracking-wide ${
                    isActive ? "text-gold" : "text-gray-500"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-gold text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-goldDark transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
