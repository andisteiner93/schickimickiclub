import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiSpotify, SiYoutube, SiInstagram, SiTiktok } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  eventDate?: string;
  message: string;
}

export default function ContactSection() {
  const { ref, controls } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    eventDate: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Send to Formspree
      const formspreeResponse = await fetch("https://formspree.io/f/movwqryd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          eventDate: data.eventDate,
          message: data.message,
          _replyto: data.email,
          _subject: "🎵 Neue Booking-Anfrage für Schickimicki Club"
        }),
      });
      
      if (!formspreeResponse.ok) {
        throw new Error("Fehler beim Senden der Nachricht");
      }
      
      return formspreeResponse.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking-Anfrage gesendet! 🎵",
        description: "Wir haben deine Anfrage erhalten und melden uns innerhalb von 24 Stunden zurück.",
      });
      setFormData({ name: "", email: "", eventDate: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Fehler beim Senden",
        description: error.message || "Bitte versuch es später nochmal oder kontaktiere uns direkt.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehlende Angaben",
        description: "Bitte fülle alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }
    
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/schickimickiclubmusik",
      icon: SiInstagram,
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/c/SchickimickiClub",
      icon: SiYoutube,
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@schickimickiclub",
      icon: SiTiktok,
      color: "bg-gray-800 hover:bg-gray-700 border-2 border-white",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/intl-de/artist/1kQPdo7zs6Otvd86Bp8lwg",
      icon: SiSpotify,
      color: "bg-green-500 hover:bg-green-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            Jetzt Buchen:
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bereit für eine unvergessliche Party? Kontaktier uns für dein Event!
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 glass-effect border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon-purple">Booking Anfrage</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Dein Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-gray-700 border-gray-600 focus:border-neon-purple"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="dein@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-700 border-gray-600 focus:border-neon-purple"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventDate" className="text-sm font-medium mb-2 block">
                      Event Datum
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      className="bg-gray-700 border-gray-600 focus:border-neon-purple"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Event Details *
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Erzähl uns von deinem Event..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-gray-700 border-gray-600 focus:border-neon-purple"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-bg-purple-pink hover:scale-105 transition-transform neon-glow"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Booking Anfrage senden
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 glass-effect border-gray-700 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gold">Kontakt Info</h3>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-neon-purple" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href="mailto:hallo@schickmickiclub.at"
                        className="text-lg font-medium hover:text-neon-purple transition-colors"
                      >
                        hallo@schickmickiclub.at
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-electric-blue" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-lg font-medium">Österreich</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="text-lg font-bold mb-4 text-electric-blue">Folg uns!</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${link.color}`}
                      >
                        <link.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
