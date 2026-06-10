import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { Mountain, UtensilsCrossed, Sparkles, Map, Bed, Wifi, Car, ConciergeBell } from "lucide-react";

const features = [
  {
    title: "Mountain View Rooms",
    desc: "Wake up to panoramic Himalayan views from every room.",
    icon: Mountain,
  },
  {
    title: "Fine Dining",
    desc: "Savor authentic Nepali and international cuisine.",
    icon: UtensilsCrossed,
  },
  {
    title: "Guided Tours",
    desc: "Explore local culture, temples, and trekking trails.",
    icon: Map,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Why Choose Us</span>
          <h2 className="font-heading mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Experience the Finest Hospitality
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            We blend modern comfort with timeless Nepali tradition.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
            <div
              key={f.title}
              className="group text-center p-7 rounded-xl bg-white border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-9 h-9 text-gray-400 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading text-base font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-200">
        <div className="text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Our Services</span>
          <h2 className="font-heading mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Everything You Need
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            We provide a complete range of services to make your stay unforgettable.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Comfortable Rooms", desc: "Well-furnished rooms with modern amenities and Himalayan views.", icon: Bed },
            { title: "Free Wi-Fi", desc: "Stay connected with high-speed internet throughout the property.", icon: Wifi },
            { title: "Airport Pickup", desc: "Hassle-free transportation to and from the nearest airport.", icon: Car },
            { title: "Room Service", desc: "24/7 room service with a wide selection of meals and drinks.", icon: ConciergeBell },
          ].map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group text-center p-7 rounded-xl bg-white border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Icon className="w-9 h-9 text-gray-400 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 text-center border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Ready for an Unforgettable Stay?
          </h2>
          <p className="mt-3 text-gray-500">
            Book your room today and experience the magic of the Himalayas.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-gold hover:bg-goldDark text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
