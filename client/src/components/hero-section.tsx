import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with captain hat photo */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-gray-900"
          style={{
            backgroundImage: "url('/captain-photo.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
      </div>
      
      {/* Subtle floating elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-20 w-16 h-16 bg-white rounded-full blur-lg"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 right-24 w-12 h-12 bg-electric-blue rounded-full blur-xl"
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold mb-6 text-white"
          >
            Schickimicki Club
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Die Polyesterbande aus dem Weinviertel
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Rolf Cabrio
            </motion.span>
            <span className="text-2xl text-gray-400">&</span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Disco Dony
            </motion.span>
          </motion.div>
          
          {/* Prominent Booking Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-electric-blue/30 rounded-full blur opacity-60 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative px-12 py-6 bg-black/50 rounded-full text-2xl font-bold text-white border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                JETZT BUCHEN
              </div>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Event Anfrage
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("music");
                if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 font-semibold transition-all duration-300"
            >
              Musik hören
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-neon-purple" />
      </motion.div>
    </section>
  );
}
