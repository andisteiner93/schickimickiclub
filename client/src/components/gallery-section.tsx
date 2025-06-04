import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

export default function GallerySection() {
  const { ref, controls } = useScrollAnimation();
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const galleryImages = [
    {
      src: "/live1.jpg",
      alt: "Schickimicki Club Live Performance",
    },
    {
      src: "/live2.jpg", 
      alt: "Energiegeladene Live Performance",
    },
    {
      src: "/live3.jpg",
      alt: "Bühnenaktion mit dramatischer Beleuchtung", 
    },
    {
      src: "/live4.jpg",
      alt: "Schickimicki Club Duo auf der Bühne",
    },
    {
      src: "/live10.jpg",
      alt: "Duo Performance auf der Bühne",
    },
    {
      src: "/live9.jpg",
      alt: "Bühnenaktion mit Mikrofon",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text-gold-pink">
            Live Impressionen
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-64 transition-transform duration-300 hover:scale-110 ${
                    image.src === "/live9.jpg" ? "object-cover object-[50%_5%]" : 
                    image.src === "/live10.jpg" ? "object-cover object-[50%_20%]" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
