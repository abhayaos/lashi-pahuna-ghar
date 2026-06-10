import { Mountain, Sunrise, Trees, Eye, Landmark, GitFork, Layers, Leaf } from "lucide-react";

const places = [
  {
    name: "Himalayan Peaks",
    desc: "Breathtaking panoramic views of the Himalayan range visible right from the hotel terrace on clear days.",
    icon: Mountain,
  },
  {
    name: "7 Mount Bonding Each Other",
    desc: "A rare panoramic sight of seven majestic Himalayan peaks standing shoulder to shoulder, visible from the hotel.",
    icon: Layers,
  },
  {
    name: "Karnali River Valley",
    desc: "A sweeping view of the lush green valley below, with the Karnali River winding through the landscape.",
    icon: Trees,
  },
  {
    name: "Sunrise Over the Hills",
    desc: "Witness stunning golden sunrises painting the sky over the eastern hills from your room window.",
    icon: Sunrise,
  },
  {
    name: "Badimalika Temple",
    desc: "A sacred Hindu temple dedicated to Goddess Malika, located in the hills and visible in the distance a significant pilgrimage site.",
    icon: Landmark,
  },
  {
    name: "Sanni Tirveni",
    desc: "A holy confluence where three rivers meet, offering a serene and spiritually significant landscape visible from the area.",
    icon: GitFork,
  },
  {
    name: "Deura Malika",
    desc: "A scenic hilltop and temple site offering expansive views of the surrounding valleys and distant peaks.",
    icon: Mountain,
  },
  {
    name: "Terraced Farmlands",
    desc: "Traditional Nepali terraced fields cascade down the hillsides, offering a glimpse into local farming life.",
    icon: Eye,
  },
  {
    name: "Natureful Surroundings",
    desc: "Immerse yourself in the untouched natural beauty fresh air, lush greenery, and the peaceful sounds of birds and wind.",
    icon: Leaf,
  },
];

export default function Place() {
  return (
    <main className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Explore</span>
        <h1 className="font-heading mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
          Views & Places
        </h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Scenic views from Lashi Pahuna Ghar and nearby attractions in Kalikot.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {places.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.name} className="flex gap-5 p-6 rounded-xl bg-white border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
