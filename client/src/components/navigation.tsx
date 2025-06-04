import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoverMenuVisible, setIsHoverMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "music", label: "Musik" },
    { id: "gallery", label: "Live" },
    { id: "contact", label: "Booking" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-effect bg-gray-900/90" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Schickimicki Club
            </motion.div>
            
            {/* Hamburger Menu Button */}
            <div className="relative group hover-menu-wrapper">
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white cursor-pointer relative z-10 h-12 w-20 flex items-center justify-center"
              >
                <Menu className="h-12 w-16 stroke-[2.5]" />
              </motion.div>
              
              {/* Invisible bridge area to help with hover transition */}
              <div className="absolute top-full right-0 h-4 w-full"></div>
              
              {/* Hover Menu */}
              <div className="absolute top-full right-0 mt-1 bg-black/50 backdrop-blur-xl rounded-3xl p-4 border border-white/20 min-w-[180px] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-2xl pointer-events-none group-hover:pointer-events-auto hover-menu">
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-lg font-medium hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20 hover:translate-x-2"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.3s ease-out forwards'
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-neon-purple transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
