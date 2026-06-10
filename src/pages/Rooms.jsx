import { Link } from "react-router-dom";

const rooms = [
  {
    name: "Standard Room",
    price: "$80 / night",
    desc: "Cozy room with city view, free Wi-Fi, and en-suite bathroom.",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
  },
  {
    name: "Deluxe Room",
    price: "$130 / night",
    desc: "Spacious room with mountain view, balcony, and premium bedding.",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
  },
  {
    name: "Suite",
    price: "$200 / night",
    desc: "Luxury suite with a private terrace, jacuzzi, and butler service.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
  },
];

export default function Rooms() {
  return (
    <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Our Rooms
      </h1>
      <p className="mt-2 text-center text-gray-500">
        Choose from our carefully designed rooms and suites.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((r) => (
          <div
            key={r.name}
            className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition"
          >
            <img
              src={r.img}
              alt={r.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{r.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{r.desc}</p>
              <p className="mt-3 text-lg font-bold text-amber-800">{r.price}</p>
              <Link
                to="/contact"
                className="mt-4 inline-block w-full text-center bg-amber-800 text-white font-semibold px-5 py-2 rounded-full hover:bg-amber-900 transition"
              >
                Book This Room
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
