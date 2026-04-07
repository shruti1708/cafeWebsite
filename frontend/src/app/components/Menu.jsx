import { useState } from "react";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const categories = [
    { id: "coffee", name: "Coffee" },
    { id: "tea", name: "Tea" },
    { id: "pastries", name: "Pastries" },
    { id: "sandwiches", name: "Sandwiches" },
  ];

  const menuItems = {
    coffee: [
      { name: "Espresso", description: "Rich and bold single shot", price: "$3.00" },
      { name: "Americano", description: "Espresso with hot water", price: "$3.50" },
      { name: "Cappuccino", description: "Espresso with foamed milk", price: "$4.50" },
      { name: "Latte", description: "Espresso with steamed milk", price: "$5.00" },
      { name: "Flat White", description: "Velvety microfoam with espresso", price: "$5.00" },
      { name: "Mocha", description: "Espresso with chocolate and steamed milk", price: "$5.50" },
      { name: "Macchiato", description: "Espresso marked with foam", price: "$3.50" },
      { name: "Cold Brew", description: "Smooth, cold-steeped coffee", price: "$4.50" },
    ],
    tea: [
      { name: "English Breakfast", description: "Classic black tea", price: "$3.00" },
      { name: "Earl Grey", description: "Black tea with bergamot", price: "$3.00" },
      { name: "Green Tea", description: "Light and refreshing", price: "$3.00" },
      { name: "Chamomile", description: "Calming herbal tea", price: "$3.50" },
      { name: "Peppermint", description: "Fresh and invigorating", price: "$3.50" },
      { name: "Chai Latte", description: "Spiced tea with steamed milk", price: "$4.50" },
      { name: "Matcha Latte", description: "Japanese green tea powder with milk", price: "$5.50" },
    ],
    pastries: [
      { name: "Croissant", description: "Buttery and flaky", price: "$4.00" },
      { name: "Pain au Chocolat", description: "Chocolate-filled pastry", price: "$4.50" },
      { name: "Almond Croissant", description: "Filled with almond cream", price: "$5.00" },
      { name: "Blueberry Muffin", description: "Fresh baked with real blueberries", price: "$3.50" },
      { name: "Cinnamon Roll", description: "Sweet and gooey", price: "$4.50" },
      { name: "Scone", description: "Available in various flavors", price: "$3.50" },
      { name: "Danish", description: "Fruit or cheese filling", price: "$4.00" },
      { name: "Brownie", description: "Rich chocolate fudge", price: "$3.50" },
    ],
    sandwiches: [
      { name: "Caprese", description: "Mozzarella, tomato, basil, balsamic", price: "$8.50" },
      { name: "Turkey & Avocado", description: "Roasted turkey, avocado, lettuce", price: "$9.00" },
      { name: "Ham & Cheese", description: "Black forest ham, swiss cheese", price: "$8.00" },
      { name: "Veggie", description: "Hummus, cucumber, sprouts, tomato", price: "$7.50" },
      { name: "BLT", description: "Bacon, lettuce, tomato, mayo", price: "$8.50" },
      { name: "Chicken Pesto", description: "Grilled chicken, pesto, provolone", price: "$9.50" },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Our Menu</h1>
          <p className="text-xl text-white/90">
            Explore our selection of handcrafted beverages and fresh food
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-amber-700 text-white"
                    : "bg-white text-stone-700 hover:bg-stone-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg text-stone-900">{item.name}</h3>
                  <span className="text-amber-700 ml-2">{item.price}</span>
                </div>
                <p className="text-stone-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-600">
            All our coffee is sourced from sustainable farms and roasted locally.
            <br />
            We offer dairy alternatives including oat, almond, and soy milk.
          </p>
          <p className="text-stone-500 text-sm mt-4">
            * Prices subject to change. Tax not included.
          </p>
        </div>
      </section>
    </div>
  );
}
