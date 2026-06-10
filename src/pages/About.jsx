export default function About() {
  return (
    <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        About Lashi Pahuna Ghar
      </h1>
      <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
        Where tradition meets tranquility.
      </p>

      <div className="mt-12 space-y-8 text-gray-600 leading-relaxed">
        <p>
          Nestled in the lush green hills of Pokhara, Lashi Pahuna Ghar is a
          family-run boutique hotel that offers an authentic Nepali experience
          combined with modern amenities. Our name — <em>Pahuna Ghar</em> —
          means "guest house" in Nepali, reflecting our deep-rooted belief that
          every guest is family.
        </p>
        <p>
          Founded in 2010, we have welcomed travelers from over 50 countries,
          providing them with a warm stay, curated local experiences, and
          breathtaking views of the Annapurna range. From yoga retreats to
          cultural tours, we offer more than just a room — we offer a home.
        </p>
        <p>
          Our team of 30 dedicated staff works around the clock to ensure your
          stay is comfortable, memorable, and truly Himalayan.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Years of Service", value: "15+" },
          { label: "Happy Guests", value: "10K+" },
          { label: "Staff Members", value: "30" },
        ].map((s) => (
          <div
            key={s.label}
            className="text-center p-6 bg-amber-50 rounded-xl"
          >
            <div className="text-3xl font-bold text-amber-800">{s.value}</div>
            <div className="mt-1 text-sm text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
