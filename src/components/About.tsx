import { Check, Award, ShieldCheck, Heart } from "lucide-react";

const features = [
  "Veteriner Teknikeri Denetimi",
  "MEB Onaylı Usta Öğretici",
  "Hayvan Refahı Öncelikli Yaklaşım",
  "Hijyenik & Steril Ekipmanlar",
  "Stres ve Sedasyonsuz Bakım",
  "Dostlarımıza Özel Keratin Bakımları",
];

const stats = [
  { icon: Award, value: "MEB", label: "Usta Öğretici" },
  { icon: ShieldCheck, value: "Lisanslı", label: "Vet. Teknikeri & Laborant" },
  { icon: Heart, value: "%100", label: "Hayvan Refahı" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border">
              <img
                src="/images/kedi_tarama/WhatsApp Image 2026-07-23 at 19.34.53.jpeg"
                alt="Patika Pet Kuaför Kedi Tarama & Deshedding Bakımı"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🐾</span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">%100 Güven</div>
                  <div className="text-sm text-muted-foreground font-sans">Profesyonel Tıbbi Altyapı</div>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Content Side */}
          <div className="text-left">
            <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">Hakkımızda</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Sevgiyle, Bilgiyle ve
              <br />
              <span className="text-primary font-medium">Güvenle Bakım Sunuyoruz</span>
            </h2>
            <div className="text-muted-foreground text-lg mb-8 space-y-4 leading-relaxed">
              <p>
                Patika Pet Kuaför olarak, dostlarımızın sadece dış görünüşünü güzelleştirmekle kalmıyor, onların sağlık ve konforunu da en üst düzeyde koruyoruz.
              </p>
              <p>
                Salondaki tüm süreçler, <strong>veteriner teknikeri ve laborant</strong> kimliğimle, hayvan fizyolojisi ve psikolojisine uygun olarak yürütülür. Aynı zamanda <strong>MEB onaylı pet kuaför usta öğretici belgesine</strong> sahip profesyonel bir ekiple hizmet veriyoruz.
              </p>
              <p>
                Salonumuzda sedasyon veya sakinleştirici kesinlikle kullanılmaz. Her dostumuza kendi hızı ve konfor alanında, stresten uzak ve tamamen hayvan refahını ön planda tutan bir yaklaşımla yaklaşıyoruz.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-display font-bold text-foreground leading-none mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-medium font-sans">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
