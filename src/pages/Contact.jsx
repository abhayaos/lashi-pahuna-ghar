import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  return (
    <main className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Get in Touch</span>
        <h1 className="font-heading mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          We'd love to hear from you. Reach out and we'll respond promptly.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="space-y-8">
          {[
            { icon: MapPin, label: "Address", value: "Kalikot, Nepal" },
            { icon: Phone, label: "Phone", value: "+977 9858320081" },
            { icon: Mail, label: "Email", value: "info@lashipahunaghar.com" },
            { icon: Clock, label: "Check-in / Check-out", value: "2:00 PM / 12:00 PM" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-gray-900 text-sm">{label}</h3>
                <p className="mt-0.5 text-sm text-gray-500">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            required
            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gold hover:bg-goldDark text-white font-semibold px-6 py-3.5 rounded-xl transition flex items-center justify-center gap-2"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </main>
  );
}
