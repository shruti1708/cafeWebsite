import { Link } from "react-router";
import { Coffee, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description: "Sourced from the finest coffee farms around the world",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in quality and service",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cup is crafted with care and passion",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1684006997322-6a5128f44816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzc1NTQ5NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern cafe interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Welcome to Artisan Cafe</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Where every cup tells a story
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/menu"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View Menu
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg backdrop-blur-sm transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-stone-900">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl mb-2 text-stone-900">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-stone-900">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774529239747-125d7a0bf928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzU0NzQyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Latte with art"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2 text-stone-900">Signature Latte</h3>
                <p className="text-stone-600 mb-4">
                  Smooth espresso with steamed milk and beautiful latte art
                </p>
                <p className="text-amber-700">$5.50</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1749996089724-268703b8c4dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cmllcyUyMGJha2VyeSUyMGNhZmV8ZW58MXx8fHwxNzc1NTQ5NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh pastries"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2 text-stone-900">Fresh Pastries</h3>
                <p className="text-stone-600 mb-4">
                  Baked daily with premium ingredients and traditional recipes
                </p>
                <p className="text-amber-700">From $3.50</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587652758160-6fee93aee8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJyZWFrZmFzdHxlbnwxfHx8fDE3NzU1NDk0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh croissant"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2 text-stone-900">Buttery Croissant</h3>
                <p className="text-stone-600 mb-4">
                  Flaky, golden croissants perfect for breakfast or any time
                </p>
                <p className="text-amber-700">$4.00</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-colors"
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-4">Visit Us Today</h2>
          <p className="text-xl mb-8 text-white/90">
            Experience the perfect blend of quality coffee and warm hospitality
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-amber-700 hover:bg-stone-100 px-8 py-3 rounded-lg transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
}
