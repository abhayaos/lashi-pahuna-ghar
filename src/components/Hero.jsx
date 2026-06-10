import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
          Welcome to{" "}
          <span className="text-amber-400">Lashi Pahuna Ghar</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200">
          Experience luxury and tradition in the heart of the Himalayas —
          where every stay feels like home.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/rooms"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full transition text-lg"
          >
            Explore Rooms
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-full transition text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
