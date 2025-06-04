import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Badge } from "@/components/ui/badge";

export default function DuoSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="duo" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            Das Duo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zwei Künstler, eine Vision: Unvergessliche Momente durch Musik schaffen
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Split background image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 h-full">
              {/* Left side - Rolf */}
              <div 
                className="relative bg-cover bg-center"
                style={{ backgroundImage: "url('/rolf-magic.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
              </div>
              {/* Right side - Dony */}
              <div 
                className="relative bg-cover bg-center"
                style={{ backgroundImage: "url('/dony-plant.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-black/30"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Rolf Cabrio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="transition-transform duration-300"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-electric-blue/30 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-electric-blue mb-4">Rolf Cabrio</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Der charismatische Frontmann mit einer Stimme, die jede Party zum Leben erweckt. 
                    Rolf bringt die perfekte Mischung aus Charme und musikalischem Talent mit.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Badge variant="secondary" className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                      Vocals
                    </Badge>
                    <Badge variant="secondary" className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                      Performance
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Disco Dony */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="transition-transform duration-300"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-electric-blue/30 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-electric-blue mb-4">Disco Dony</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Der Beat-Master und Sound-Architekt. Dony sorgt für die Grooves, die niemand 
                    stillstehen lassen und jede Tanzfläche zum Beben bringen.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Badge variant="secondary" className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                      DJ
                    </Badge>
                    <Badge variant="secondary" className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                      Production
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
