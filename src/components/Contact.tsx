import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Altıeylül / Balıkesir",
    detail: "Gaziosmanpaşa Mah. 203 Sok.",
  },
  {
    icon: Phone,
    title: "Telefon / WhatsApp",
    content: "+90 552 950 20 42",
    detail: "Randevu Hattı",
  },
  {
    icon: Mail,
    title: "E-posta",
    content: "info@patikapetkuafor.com",
    detail: "",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "Pazartesi - Cumartesi",
    detail: "09:00 - 19:00",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">İletişim</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            Sorularınız veya randevu talepleriniz için telefon veya WhatsApp üzerinden bize kolayca ulaşabilirsiniz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 100, damping: 18 }}
              >
                <Card className="h-full bg-card border-border hover:shadow-pet-md transition-shadow rounded-2xl">
                  <CardContent className="p-6 text-left">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2 text-base">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-semibold text-sm leading-tight mb-1">{info.content}</p>
                    {info.detail && <p className="text-muted-foreground font-sans text-xs">{info.detail}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="rounded-[2rem] overflow-hidden h-96 border border-border shadow-lg bg-card"
          >
            <iframe
              src="https://maps.google.com/maps?q=Patika%20Pet%20Kuaf%C3%B6r%20Alt%C4%B1eyl%C3%BCl%20Bal%C4%B1kesir&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Patika Pet Kuaför Konum"
            />
          </motion.div>

          {/* Map Actions */}
          <div className="mt-6 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/20 px-8" asChild>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Patika%20Pet%20Kuaf%C3%B6r%20Alt%C4%B1eyl%C3%BCl%20Bal%C4%B1kesir"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Haritalar'da Aç & Yol Tarifi Al
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
