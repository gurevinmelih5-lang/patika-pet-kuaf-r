import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-white via-[#F7FAF7] to-[#EEF4EE] overflow-hidden">
      {/* Soft background glow circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#E2ECE2] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 max-w-2xl text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Profesyonel & Güvenilir Pet Kuaför</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              Dostunuzun Mutluluğu ve
              <br />
              <span className="text-primary font-medium">Sağlığı İçin Buradayız</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Patika Pet Kuaför, MEB onaylı usta öğretici ve veteriner teknikeri kadrosuyla, dostlarınıza hijyenik, stressiz ve sevgi dolu bir bakım deneyimi sunar.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button size="lg" className="group w-full bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/20 flex items-center justify-center gap-2" asChild>
                  <a href="https://wa.me/905529502042" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 fill-current" />
                    WhatsApp Randevu Al
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-foreground rounded-full w-full" asChild>
                  <a href="#services">Hizmetlerimiz</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-12 pt-8 border-t border-border"
            >
              <div>
                <div className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-primary">500+</div>
                <div className="text-muted-foreground text-[10px] sm:text-xs md:text-sm font-medium font-sans">Mutlu Dostumuz</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-primary">%100</div>
                <div className="text-muted-foreground text-[10px] sm:text-xs md:text-sm font-medium font-sans">Hijyen & Güven</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-primary">MEB</div>
                <div className="text-muted-foreground text-[10px] sm:text-xs md:text-sm font-medium font-sans">Usta Öğretici</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative box */}
              <div className="absolute -inset-4 rounded-[2rem] border border-primary/20 scale-95 translate-x-3 translate-y-3 pointer-events-none" />
              {/* Main image container */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-border shadow-2xl bg-white">
                <img
                  src="/images/hero-main.jpg"
                  alt="Patika Pet Kuaför Bakım Hizmetleri"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Small badge floating */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white border border-border rounded-2xl p-4 shadow-xl flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                  🐾
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Güvenli Bakım</div>
                  <div className="text-xs text-muted-foreground font-sans">Veteriner Teknikeri Kontrolü</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
