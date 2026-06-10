import { Bed } from "lucide-react";

export default function Rooms() {
  return (
    <main className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Accommodation</span>
        <h1 className="font-heading mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
          Our Rooms
        </h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Choose from our carefully designed rooms and suites.
        </p>
      </div>

      <div className="mt-20 text-center">
        <Bed className="w-12 h-12 text-gray-300 mx-auto" />
        <p className="mt-4 font-heading text-lg font-semibold text-gray-900">No rooms added yet.</p>
        <p className="mt-1 text-sm text-gray-500">Check back soon for available accommodations.</p>
      </div>
    </main>
  );
}
