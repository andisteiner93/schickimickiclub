import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";

import MusicSection from "@/components/music-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MusicSection />
      <GallerySection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-white mb-4">
            Schickimicki Club
          </div>
          <p className="text-gray-400 mb-4">© 2025 Schickimicki Club. Alle Rechte vorbehalten.</p>
          <p className="text-sm text-gray-500">Rolf Cabrio <span className="text-lg font-bold">&</span> Disco Dony - Musik die ballert</p>
        </div>
      </footer>
    </div>
  );
}
