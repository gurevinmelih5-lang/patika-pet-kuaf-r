import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Sparkles } from "lucide-react";

interface PetGrooming {
  id: string;
  name: string;
  breed: string;
  description: string;
  before: string;
  after: string;
}

const PETS_DATA: PetGrooming[] = [
  {
    id: "pomeranian",
    name: "Pomeranian (Boo)",
    breed: "Pomeranian",
    description: "Kabarık dostumuz sevimli bir Boo kesimi ile yepyeni ve pırıl pırıl bir görünüme kavuştu.",
    before: "/images/tras/WhatsApp Image 2026-07-23 at 19.46.19.jpeg",
    after: "/images/tras/WhatsApp Image 2026-07-23 at 19.46.20.jpeg"
  },
  {
    id: "yorkshire",
    name: "Yorkshire Terrier",
    breed: "Yorkshire",
    description: "İpeksi tüyleri düzeltilip şekillendirilerek asil ve enerjik yapısına uygun bir tarz kazandırıldı.",
    before: "/images/tras/WhatsApp Image 2026-07-23 at 19.46.20 (1).jpeg",
    after: "/images/tras/WhatsApp Image 2026-07-23 at 19.46.20 (2).jpeg"
  },
  {
    id: "maltese",
    name: "Maltese Karışımı",
    breed: "Maltese Mix",
    description: "Dolaşmış ve yıpranmış tüylerden tamamen arındırılarak yumuşacık ve tertemiz bir tıraş yapıldı.",
    before: "/images/tras/WhatsApp Image 2026-07-23 at 19.46.22.jpeg",
    after: "/images/tras/WhatsApp Image 2026-07-23 at 19.46.22 (1).jpeg"
  },
  {
    id: "Poodle",
    name: "Poodle",
    breed: "Poodle ",
    description: "Kulak ve gövde tüyleri özenle kesilip taranarak sağlıklı ve ışıltılı bir form kazandı.",
    before: "/images/tras/WhatsApp Image 2026-07-23 at 19.58.28.jpeg",
    after: "/images/tras/WhatsApp Image 2026-07-23 at 19.58.28 (1).jpeg"
  },
  {
    id: "Pomeranian-Boo",
    name: "Pomeranian-Boo",
    breed: "Pomeranian-Boo",
    description: "Tüy dökümünü azaltan ve asaletini öne çıkaran profesyonel banyo ve tıraş bakımı.",
    before: "/images/tras/WhatsApp Image 2026-07-23 at 19.58.28 (2).jpeg",
    after: "/images/tras/WhatsApp Image 2026-07-23 at 19.58.29.jpeg"
  },
  {
    id: "Pomeranian-Spitz",
    name: "Pomeranian-Spitz",
    breed: "Pomeranian-Spitz",
    description: "Yüz detayları ve patileri özenle düzeltilerek konforlu ve sevimli bir tıraş uygulandı.",
    before: "/images/tras/WhatsApp Image 2026-07-23 at 19.58.29 (1).jpeg",
    after: "/images/tras/WhatsApp Image 2026-07-23 at 19.58.29 (2).jpeg"
  },
  {
    id: "Pomeranian",
    name: "Pomeranian",
    breed: "Pomeranian",
    description: "Gür kıvırcık tüyleri taranıp kısaltılarak hafif, havadar ve estetik bir tarz elde edildi.",
    before: "/images/tras/WhatsApp Image 2026-07-23 at 19.58.30.jpeg",
    after: "/images/tras/WhatsApp Image 2026-07-23 at 19.58.30 (1).jpeg"
  },
  {
    id: "cat-tekir",
    name: "Tekir Kedi (Aslan Kesimi)",
    breed: "Tekir Kedi",
    description: "Uzun tüylü tekir dostumuz rahatlatıcı bir banyo ve aslan yelesi kesimi ile konforlu bir yaz geçirmeye hazır.",
    before: "/images/kedi_trasi/WhatsApp Image 2026-07-23 at 19.29.56.jpeg",
    after: "/images/kedi_trasi/WhatsApp Image 2026-07-23 at 19.29.58.jpeg"
  },
  {
    id: "cat-krem",
    name: "Krem Kedi (Lion Cut)",
    breed: "Krem Kedi",
    description: "Göz alıcı krem tüyleri özenle aslan tıraşı formunda kısaltılarak keçelenmelerden temizlendi.",
    before: "/images/kedi_trasi/WhatsApp Image 2026-07-23 at 19.29.58 (1).jpeg",
    after: "/images/kedi_trasi/WhatsApp Image 2026-07-23 at 19.29.58 (2).jpeg"
  },
  {
    id: "cat-gri",
    name: "Gri Kedi (British)",
    breed: "British Kedi",
    description: "Asil British Shorthair dostumuzun tüy sağlığı korunarak anestezisiz tıraş ve tırnak kesimi uygulandı.",
    before: "/images/kedi_trasi/WhatsApp Image 2026-07-23 at 19.29.58 (3).jpeg",
    after: "/images/kedi_trasi/WhatsApp Image 2026-07-23 at 19.29.59.jpeg"
  }
];

const BeforeAfterSlider = () => {
  const [activePetIndex, setActivePetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePet = PETS_DATA[activePetIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleWindowTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("touchmove", handleWindowTouchMove, { passive: false });

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("touchmove", handleWindowTouchMove);
    };
  }, [isDragging]);

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sihirli Dönüşüm</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Öncesi & Sonrası Bakım
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Dostlarımızın kuaför salonumuzda geçirdiği harika değişimi sürükleyiciyi kaydırarak kendiniz görün!
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative overflow-hidden w-full aspect-[16/10] rounded-3xl border border-border shadow-2xl select-none cursor-ew-resize bg-secondary"
            onMouseDown={(e) => {
              e.preventDefault();
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePet.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Before Image (Background) */}
                <div className="absolute inset-0 w-full h-full bg-secondary">
                  <img
                    src={activePet.before}
                    alt={`Bakım Öncesi ${activePet.name}`}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {/* Label Before */}
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-semibold tracking-wider uppercase z-10 shadow-md">
                    Öncesi
                  </div>
                </div>

                {/* After Image (Overlay with clipping) */}
                <div
                  className="absolute inset-y-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <img
                    src={activePet.after}
                    alt={`Bakım Sonrası ${activePet.name}`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  {/* Label After */}
                  <div className="absolute bottom-6 right-6 px-4 py-2 bg-primary/95 backdrop-blur-md rounded-full text-white text-xs font-semibold tracking-wider uppercase z-10 shadow-md">
                    Sonrası
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Bar & Drag Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-2xl pointer-events-none z-20"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              {/* Interactive Handle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary border-4 border-white shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing text-white"
              >
                <Scissors className="w-5 h-5 -rotate-90" />
              </motion.div>
            </div>
          </div>

          {/* Active Pet Description */}
          <div className="text-center min-h-[90px] my-8 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePet.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">{activePet.name}</h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                  {activePet.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selector Thumbnails */}
          <div className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-none snap-x snap-mandatory justify-start md:justify-center border-t border-border/55 pt-6">
            {PETS_DATA.map((pet, idx) => {
              const isActive = idx === activePetIndex;
              return (
                <button
                  key={pet.id}
                  onClick={() => {
                    setActivePetIndex(idx);
                    setSliderPosition(50); // Reset slider position on switch
                  }}
                  className="flex-shrink-0 relative flex flex-col items-center snap-start focus:outline-none group"
                >
                  <div
                    className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${isActive
                      ? "border-primary scale-105 shadow-lg shadow-primary/20"
                      : "border-transparent opacity-60 group-hover:opacity-100 group-hover:scale-102"
                      }`}
                  >
                    <img
                      src={pet.after}
                      alt={pet.name}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center backdrop-blur-[1px]">
                        <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shadow-md animate-pulse">
                          <Scissors className="w-4 h-4 -rotate-90" />
                        </div>
                      </div>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-semibold tracking-wide transition-colors ${isActive ? "text-primary font-bold" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                  >
                    {pet.breed}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
