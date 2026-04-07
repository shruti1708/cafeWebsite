import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Our Story</h1>
          <p className="text-xl text-white/90">
            A passion for coffee that started over a decade ago
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-stone-900">Where It All Began</h2>
              <p className="text-stone-600 mb-4">
                Founded in 2015, Artisan Cafe started with a simple mission: to bring
                exceptional coffee and genuine hospitality to our community. What began
                as a small neighborhood cafe has grown into a beloved gathering place
                for coffee enthusiasts, remote workers, and friends catching up.
              </p>
              <p className="text-stone-600 mb-4">
                Our founder, Maria Rodriguez, spent years traveling the world's coffee
                regions, learning from master roasters and farmers. She brought back not
                just knowledge, but relationships with the people who grow our beans.
              </p>
              <p className="text-stone-600">
                Every cup we serve is a result of that dedication to quality and
                connection. From sourcing to roasting to brewing, we handle each step
                with care and expertise.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607618421926-b72c6a99c342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmUlMjBiYXJpc3RhfGVufDF8fHx8MTc3NTQ5MjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Espresso machine"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-stone-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl mb-4 text-stone-900">Quality First</h3>
              <p className="text-stone-600">
                We never compromise on quality. From bean selection to brewing
                technique, excellence is our standard.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl mb-4 text-stone-900">Sustainability</h3>
              <p className="text-stone-600">
                We partner with farms that practice sustainable agriculture and fair
                trade, ensuring a better future for everyone.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl mb-4 text-stone-900">Community</h3>
              <p className="text-stone-600">
                Our cafe is more than a business—it's a space where people connect,
                create, and feel at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1766228271645-00a6606e1546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwb3V0ZG9vciUyMHNlYXRpbmd8ZW58MXx8fHwxNzc1NDc4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Outdoor seating"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl mb-4 text-stone-900">Visit Our Space</h3>
              <p className="text-stone-600 mb-4">
                Our cafe features a warm, inviting interior designed for both
                productivity and relaxation. Whether you're working on your laptop,
                meeting friends, or simply enjoying a quiet moment with a book, we've
                created the perfect environment.
              </p>
              <p className="text-stone-600">
                With comfortable seating, natural lighting, and complimentary Wi-Fi,
                Artisan Cafe is your home away from home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6 text-stone-900">Meet Our Team</h2>
          <p className="text-stone-600 max-w-3xl mx-auto mb-12">
            Our talented baristas are passionate about coffee and dedicated to providing
            you with an exceptional experience. Each team member has undergone extensive
            training in coffee preparation, customer service, and our sustainability
            practices.
          </p>
          <p className="text-stone-600 max-w-2xl mx-auto">
            When you visit us, you're not just getting a great cup of coffee—you're
            connecting with people who truly care about their craft and your experience.
          </p>
        </div>
      </section>
    </div>
  );
}
