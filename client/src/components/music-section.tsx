import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, X } from "lucide-react";
import { SiSpotify, SiYoutube, SiInstagram, SiTiktok } from "react-icons/si";
import { useState } from "react";

export default function MusicSection() {
  const { ref, controls } = useScrollAnimation();
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/c/SchickimickiClub",
      icon: SiYoutube,
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/schickimickiclubmusik",
      icon: SiInstagram,
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@schickimickiclub",
      icon: SiTiktok,
      color: "bg-gray-800 hover:bg-gray-700 border-2 border-white",
    },
  ];

  return (
    <section id="music" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            Unsere Musik
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hör rein und lass dich von unserem Sound mitreißen
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Spotify Embed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 glass-effect neon-glow">
              <div className="text-center mb-6">
                <SiSpotify className="text-6xl text-green-500 mb-4 mx-auto" />
              </div>
              <div className="aspect-video">
                <iframe
                  src="https://open.spotify.com/embed/artist/1kQPdo7zs6Otvd86Bp8lwg?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-2xl w-full h-full"
                />
              </div>
            </div>
          </motion.div>
          
          {/* YouTube Videos */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Unsere Videos</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Afoch so */}
              <motion.div 
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                onClick={() => setExpandedVideo('afoch-so')}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold text-white mb-4">Afoch so</h4>
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/0ivk3Sgpu-Q"
                    title="Schickimicki Club - Afoch so"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </motion.div>
              
              {/* Fetzndicht */}
              <motion.div 
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                onClick={() => setExpandedVideo('fetzndicht')}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold text-white mb-4">Fetzndicht</h4>
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/peCRhKi_OeA"
                    title="Schickimicki Club - Fetzndicht"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>

            {/* Expanded Video Modal */}
            <AnimatePresence>
              {expandedVideo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                  onClick={() => setExpandedVideo(null)}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative w-full max-w-6xl aspect-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setExpandedVideo(null)}
                      className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                    >
                      <X className="w-8 h-8" />
                    </button>
                    <iframe
                      src={expandedVideo === 'afoch-so' 
                        ? "https://www.youtube.com/embed/0ivk3Sgpu-Q?autoplay=1" 
                        : "https://www.youtube.com/embed/peCRhKi_OeA?autoplay=1"
                      }
                      title={expandedVideo === 'afoch-so' ? "Schickimicki Club - Afoch so" : "Schickimicki Club - Fetzndicht"}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Social Media Links - Compact */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${link.color}`}
              >
                <link.icon className="text-2xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
