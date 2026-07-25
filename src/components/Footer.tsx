import { Phone, Mail, MapPin, Instagram, Facebook, PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 border border-border/80 shadow-sm">
                <img src="/logo.png" alt="Patika Pet Kuaför Logo" className="w-full h-full object-contain p-1" />
              </div>
              <span className="font-display font-bold text-xl">
                Patika <span className="text-primary font-medium">Pet Kuaför</span>
              </span>
            </div>
            <p className="text-background/70 mb-6 font-sans text-sm leading-relaxed">
              Dostlarınız için veteriner teknikeri denetiminde, MEB onaylı usta öğretici standartlarında profesyonel bakım hizmetleri sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/patikapetkuafor" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3 font-sans text-sm">
              {[
                { label: "Ana Sayfa", href: "#home" },
                { label: "Hakkımızda", href: "#about" },
                { label: "Hizmetler", href: "#services" },
                { label: "Galeri", href: "#gallery" },
                { label: "SSS", href: "#faq" },
                { label: "Blog", href: "#blog" },
                { label: "İletişim", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3 font-sans text-sm">
              {["Köpek Tıraşı", "Kedi Tıraşı", "Irka Özel Tıraş", "Banyo & Kurutma", "Detaylı Tarama", "Tırnak Kesimi", "Kulak Temizliği", "Hijyen Bakımı", "Keratin Bakımı"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-background/70 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/70">
                  Gaziosmanpaşa Mah. 203 Sok.
                  <br />
                  Altıeylül / Balıkesir
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+905529502042" className="text-background/70 hover:text-primary transition-colors">
                  +90 552 950 20 42
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@patikapetkuafor.com" className="text-background/70 hover:text-primary transition-colors">
                  info@patikapetkuafor.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm font-sans">
            © 2026 Patika Pet Kuaför. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm font-sans">
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
