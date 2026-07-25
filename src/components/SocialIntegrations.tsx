import { Instagram, Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const instagramPosts = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600",
    likes: 124,
    comments: 18,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600",
    likes: 215,
    comments: 32,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600",
    likes: 98,
    comments: 12,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=600",
    likes: 187,
    comments: 24,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600",
    likes: 154,
    comments: 15,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600",
    likes: 312,
    comments: 42,
  },
];

const SocialIntegrations = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Instagram Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e1306c] to-[#bc1888] text-white flex items-center justify-center mx-auto mb-4">
            <Instagram className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Bizi Instagram'da Takip Edin
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            <a 
              href="https://www.instagram.com/patikapetkuafor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-semibold"
            >
              @patikapetkuafor
            </a>{" "}
            hesabımızdan sevimli dostlarımızın anlık karelerini paylaşıyoruz.
          </p>
        </div>

        {/* Instagram Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/patikapetkuafor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Patika Pet Kuaför Instagram Paylaşımı ${post.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden group border border-border bg-muted cursor-pointer"
            >
              <img
                src={post.url}
                alt="Patika Pet Kuaför Instagram Paylaşımı"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1.5 font-bold text-sm">
                  <Heart className="w-4 h-4 fill-current" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-1.5 font-bold text-sm">
                  <MessageCircle className="w-4 h-4 fill-current" />
                  {post.comments}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialIntegrations;
