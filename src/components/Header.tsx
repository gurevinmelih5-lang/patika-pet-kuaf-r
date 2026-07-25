import { useState } from "react";
import { Menu, X, Phone, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Ana Sayfa");

  const navItems = [
    { label: "Ana Sayfa", href: "#home" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Hizmetler", href: "#services" },
    { label: "Galeri", href: "#gallery" },
    { label: "SSS", href: "#faq" },
    { label: "Blog", href: "#blog" },
    { label: "İletişim", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" onClick={() => setActiveTab("Ana Sayfa")} className="flex items-center gap-2 min-w-0 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 border border-border/80 group-hover:scale-105 transition-transform duration-200 shadow-sm">
              <img src="/logo.png" alt="Patika Pet Kuaför Logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className="font-display font-bold text-base md:text-xl text-foreground truncate">
              Patika <span className="text-primary font-medium">Pet Kuaför</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className="relative text-foreground/80 hover:text-primary transition-colors font-medium py-2 text-sm lg:text-base"
              >
                {item.label}
                {activeTab === item.label && (
                  <motion.div
                    layoutId="activeHeaderTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+905529502042" className="flex items-center gap-2 text-foreground/80 hover:text-primary font-medium transition-colors text-sm lg:text-base">
              <Phone className="w-4 h-4 text-primary" />
              <span>+90 552 950 20 42</span>
            </a>
            <Button size="sm" className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-white font-medium rounded-full" asChild>
              <a href="https://wa.me/905529502042" target="_blank" rel="noopener noreferrer">
                WhatsApp Randevu
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="md:hidden py-4 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-2.5 px-2 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-all font-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveTab(item.label);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="pt-4 mt-4 border-t border-border flex flex-col gap-3 px-2">
                <a href="tel:+905529502042" className="flex items-center gap-2 text-foreground/80 hover:text-primary font-medium transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+90 552 950 20 42</span>
                </a>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-full" asChild>
                  <a href="https://wa.me/905529502042" target="_blank" rel="noopener noreferrer">
                    WhatsApp Randevu
                  </a>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
