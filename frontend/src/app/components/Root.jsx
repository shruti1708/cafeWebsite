import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl mb-4">Artisan Cafe</h3>
              <p className="text-stone-400">Crafting exceptional coffee experiences since 2015</p>
            </div>
            <div>
              <h4 className="mb-4">Hours</h4>
              <p className="text-stone-400">Monday - Friday: 7am - 7pm</p>
              <p className="text-stone-400">Saturday - Sunday: 8am - 8pm</p>
            </div>
            <div>
              <h4 className="mb-4">Location</h4>
              <p className="text-stone-400">123 Coffee Street</p>
              <p className="text-stone-400">Downtown, CA 90210</p>
              <p className="text-stone-400 mt-2">(555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-800 text-center text-stone-400">
            <p>&copy; 2026 Artisan Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
