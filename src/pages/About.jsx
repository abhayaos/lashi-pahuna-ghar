import { Clock, Users, Building2 } from "lucide-react";

export default function About() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">About</span>
        <h1 className="font-heading mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
          Lashi Pahuna Ghar
        </h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Where tradition meets tranquility.
        </p>
      </div>

      <div className="mt-16 space-y-6 text-gray-500 leading-relaxed">
        <p>
          Nestled in the lush green hills of Kalikot, Lashi Pahuna Ghar is a
          family-run boutique hotel that offers an authentic Nepali experience
          combined with modern amenities. Our philosophy every guest is family.
        </p>
        <p>
          Founded in 2010, we have welcomed travelers from over 50 countries,
          providing them with a warm stay, curated local experiences, and
          breathtaking views of the Annapurna range. From yoga retreats to
          cultural tours, we offer more than just a room we offer a home.
        </p>
        <p>
          Our team of 30 dedicated staff works around the clock to ensure your
          stay is comfortable, memorable, and truly Himalayan.
        </p>
      </div>

      <div className="mt-14 p-8 rounded-xl bg-gray-50 border border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
            <Building2 className="w-7 h-7 text-gold" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-gray-900">Founder</h3>
            <p className="font-heading text-lg font-semibold text-gold">Anand Bikram Shahi</p>
            <p className="text-sm text-gray-500">Politician &amp; Chairperson of Congress, Kalikot</p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
        {[
          { label: "Years of Service", value: "15+", icon: Clock },
          { label: "Staff Members", value: "5", icon: Building2 },
        ].map((s) => {
          const Icon = s.icon;
          return (
          <div
            key={s.label}
            className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200"
          >
            <Icon className="w-6 h-6 text-gold mx-auto mb-3" />
            <div className="font-heading text-3xl font-bold text-gray-900">{s.value}</div>
            <div className="mt-1 text-sm text-gray-500">{s.label}</div>
          </div>
          );
        })}
      </div>
    </main>
  );
}
