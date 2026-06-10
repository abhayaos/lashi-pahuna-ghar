import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <Zap className="w-10 h-10 text-gold mx-auto mb-5" />
        <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Nepal Tourism Hotels
        </p>
        <h1 className="font-heading text-4xl sm:text-6xl font-bold text-gray-900 leading-tight">
          Welcome to{" "}
          <span className="text-gold">Lashi Pahuna Ghar</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-body">
          Experience luxury and tradition in the heart of the Himalayas 
          where every stay feels like home.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/rooms"
            className="bg-gold hover:bg-goldDark text-white font-semibold px-8 py-3 rounded-full transition text-lg"
          >
            Explore Rooms
          </Link>
          <Link
            to="/contact"
            className="border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white font-semibold px-8 py-3 rounded-full transition text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
