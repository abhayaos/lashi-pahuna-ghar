export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  return (
    <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Contact Us
      </h1>
      <p className="mt-2 text-center text-gray-500">
        We'd love to hear from you. Get in touch with us.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">📍 Address</h3>
            <p className="text-sm">Lakeside, Pokhara 33700, Nepal</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">📞 Phone</h3>
            <p className="text-sm">+977 61 4XXXXXX</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">✉ Email</h3>
            <p className="text-sm">info@lashipahunaghar.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">🕐 Check-in / Check-out</h3>
            <p className="text-sm">Check-in: 2:00 PM / Check-out: 12:00 PM</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            className="w-full bg-amber-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
