import { Scissors, Bath, Heart, Award, Shield, Sparkles, Gem, PawPrint, Ear } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const services = [
  {
    icon: Scissors,
    title: "Köpek Tıraşı",
    description: "Dostunuzun ırk özelliklerine ve tüy yapısına en uygun, makas veya makine kesim uygulamaları.",
  },
  {
    icon: PawPrint,
    title: "Kedi Tıraşı",
    description: "Sedasyonsuz ve anestezisiz, kedinizin stres seviyesini en düşükte tutarak yapılan profesyonel kesim.",
  },
  {
    icon: Award,
    title: "Irka Özel Tıraş",
    description: "Poodle, Pomeranian, Malta Teriyeri gibi özel makas işçiliği gerektiren ırkların estetik kesimleri.",
  },
  {
    icon: Bath,
    title: "Banyo & Kurutma",
    description: "Dostunuzun tüy ve deri tipine özel premium şampuanlarla yıkama ve stressiz kurutma.",
  },
  {
    icon: Sparkles,
    title: "Detaylı Tarama",
    description: "Tüylerin kökten uca taranarak ölü tüylerden arındırılması ve düğümlerin acısız açılması.",
  },
  {
    icon: Heart,
    title: "Tırnak Kesimi",
    description: "Dostunuzun patilerine zarar vermeden, tırnak yapısına uygun kesim ve törpüleme işlemi.",
  },
  {
    icon: Ear,
    title: "Kulak Temizliği",
    description: "Kulak içi kir ve tüylerin arındırılması, enfeksiyon risklerine karşı hijyenik bakım.",
  },
  {
    icon: Shield,
    title: "Hijyen Bakımı",
    description: "Pati altları, karın ve genital bölge gibi hassas alanların tüylerden temizlenerek hijyeninin sağlanması.",
  },
  {
    icon: Gem,
    title: "Keratin Bakımı",
    description: "Kuru, mat veya dökülmeye meyilli tüyleri dipten uca besleyip canlandıran premium keratin kürü.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">Hizmetlerimiz</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Profesyonel Pet Bakım Hizmetleri
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            Dostlarınızın tüm kuaförlük ihtiyaçlarını veteriner teknikeri kontrolünde, sevgi ve sabırla karşılıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group h-full bg-card hover:shadow-pet-lg transition-all duration-300 border-border hover:border-primary/30 overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
