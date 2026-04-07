import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Get In Touch</h1>
          <p className="text-xl text-white/90">
            We'd love to hear from you. Stop by or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8 text-stone-900">Visit Us</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-amber-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-stone-900">Location</h3>
                    <p className="text-stone-600">123 Coffee Street</p>
                    <p className="text-stone-600">Downtown, CA 90210</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-amber-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-stone-900">Phone</h3>
                    <p className="text-stone-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-amber-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-stone-900">Email</h3>
                    <p className="text-stone-600">hello@artisancafe.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-amber-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-stone-900">Hours</h3>
                    <p className="text-stone-600">Monday - Friday: 7am - 7pm</p>
                    <p className="text-stone-600">Saturday - Sunday: 8am - 8pm</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-stone-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-stone-500">Map View</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-8 text-stone-900">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-stone-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-stone-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-stone-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl mb-4 text-stone-900">Planning an Event?</h2>
          <p className="text-stone-600 mb-6">
            We offer catering services and can host private events in our space.
            Contact us to discuss your needs and get a custom quote.
          </p>
          <a
            href="mailto:hello@artisancafe.com"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Inquire About Events
          </a>
        </div>
      </section>
    </div>
  );
}
