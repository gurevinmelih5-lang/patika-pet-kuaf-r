import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Neden randevulu çalışıyorsunuz?",
    answer: "Dostlarımızın salonumuzda bekleme stresi yaşamaması ve her birine tamamen bölünmemiş, özel bir zaman dilimi ayırabilmek amacıyla randevu sistemiyle çalışıyoruz. Bu sayede salonumuzda aynı anda birden fazla evcil hayvan bulunmuyor ve sakin bir ortam sağlanıyor.",
  },
  {
    question: "Bit veya pireli dostlarımızı kabul ediyor musunuz?",
    answer: "Salonumuzun katı hijyen standartları ve diğer misafir dostlarımızın sağlığını korumak amacıyla aktif dış parazit (bit/pire) taşıyan canları doğrudan bakım salonumuza kabul edemiyoruz. Randevu öncesinde veteriner hekiminiz tarafından uygulanan parazit tedavisinin tamamlanmış olması gerekmektedir.",
  },
  {
    question: "Bakım ve tıraş işlemleri ortalama ne kadar sürüyor?",
    answer: "İşlem süresi dostumuzun boyutuna, ırkına, tüy yapısına (keçe durumu vb.) ve yapılacak uygulamaya (sadece banyo, standart tıraş veya keratin bakımı) göre değişmektedir. Ortalama bir komple bakım işlemi 1.5 saat ile 3 saat arasında sürmektedir.",
  },
  {
    question: "Bakım esnasında sedasyon (anestezi/sakinleştirici) kullanıyor musunuz?",
    answer: "Kesinlikle hayır. Veteriner teknikeri ve laborant geçmişimizin getirdiği tıbbi bilinçle, salonumuzda hiçbir canlıya anestezi, sedasyon veya sakinleştirici ilaç uygulanmaz. Tüm süreç dostunuzun güvenini kazanarak, sevgiyle ve sabırla yürütülür.",
  },
  {
    question: "Kediler için de kuaför hizmetiniz var mı?",
    answer: "Evet. Kedilerimizin tüy ve deri yapıları ile psikolojileri köpeklere göre çok daha hassastır. Kedi tıraşı ve banyo hizmetlerimizi tamamen sakinleştirici kullanmadan, kedinizin stres seviyesini minimumda tutacak özel tekniklerle gerçekleştiriyoruz.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">Destek</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            Dostlarımızın bakımı ve salon süreçlerimiz hakkında en çok merak edilen konuları sizin için yanıtladık.
          </p>
        </div>

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="border border-border rounded-3xl p-6 md:p-8 bg-card shadow-lg"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-none">
                <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary py-4 text-base md:text-lg transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
