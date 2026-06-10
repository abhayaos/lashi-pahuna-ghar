import daalbhat from "../assets/daalbhat.webp";
import momo from "../assets/momo.webp";
import thukpa from "../assets/thukpa.webp";
import selroti from "../assets/selroti.webp";
import masalachai from "../assets/masalachai.webp";
import blackcoffe from "../assets/blackcoffe.webp";
import freshjuice from "../assets/freshjuice.webp";
import lassi from "../assets/lassi.webp";

const categories = [
  {
    name: "Nepali Specials",
    items: [
      { name: "Dal Bhat", desc: "Traditional lentil soup with steamed rice, curry, and pickles.", price: "NPr 300", img: daalbhat },
      { name: "Momos (Chicken/Veg)", desc: "Steamed dumplings served with spicy tomato chutney.", price: "NPr 120", img: momo },
      { name: "Thukpa", desc: "Tibetan noodle soup with vegetables or chicken.", price: "NPr 300", img: thukpa },
      { name: "Sel Roti", desc: "Traditional homemade ring-shaped rice bread.", price: "NPr 50", img: selroti },
    ],
  },
  {
    name: "Beverages",
    items: [
      { name: "Masala Chai", desc: "Spiced Nepali tea with ginger and cardamom.", price: "NPr 30", img: masalachai },
      { name: "Black Coffee", desc: "Freshly brewed local Himalayan coffee.", price: "NPr 60", img: blackcoffe },
      { name: "Fresh Juice", desc: "Seasonal fruit juice orange, mango, or mixed.", price: "NPr 130", img: freshjuice },
      { name: "Lassi", desc: "Traditional yogurt drink, sweet or salted.", price: "NPr 100", img: lassi },
    ],
  },
];

export default function Menu() {
  return (
    <main className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Dining</span>
        <h1 className="font-heading mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
          Our Menu
        </h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Savor authentic Nepali flavors prepared by our expert chefs.
        </p>
      </div>

      <div className="mt-16 space-y-14">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h2 className="font-heading text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">
              {cat.name}
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="font-heading font-bold text-gold mt-2">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
