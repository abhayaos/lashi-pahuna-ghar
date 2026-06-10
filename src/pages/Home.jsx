import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Mountain View Rooms",
    desc: "Wake up to panoramic Himalayan views from every room.",
    icon: "🏔",
  },
  {
    title: "Fine Dining",
    desc: "Savor authentic Nepali and international cuisine.",
    icon: "🍽",
  },
  {
    title: "Wellness Spa",
    desc: "Relax with traditional massages and yoga sessions.",
    icon: "🧘",
  },
  {
    title: "Guided Tours",
    desc: "Explore local culture, temples, and trekking trails.",
    icon: "🗺",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-center text-gray-500 max-w-xl mx-auto">
          We blend modern comfort with timeless Nepali hospitality.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Ready for an Unforgettable Stay?
        </h2>
        <p className="mt-2 text-gray-500">
          Book your room today and experience the magic of the Himalayas.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block bg-amber-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-amber-900 transition"
        >
          Book Now
        </Link>
      </section>
    </>
  );
}
