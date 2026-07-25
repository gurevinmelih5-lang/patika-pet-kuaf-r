import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight, X, Lock, Unlock, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface BlogPost {
  id: string | number;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  summary: string;
  content: string;
  isCustom?: boolean;
}

const DEFAULT_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Evcil Hayvanlarda Tüy Dökülmesi Nasıl Azaltılır?",
    category: "Köpek & Kedi Bakımı",
    date: "18 Temmuz 2026",
    author: "Vet. Teknikeri & Laborant",
    image: "/images/kedi_tarama/WhatsApp Image 2026-07-23 at 19.34.53 (1).jpeg",
    summary: "Mevsim geçişlerinde kedi ve köpeklerde tüy dökülmesinin nedenleri, doğru beslenme tavsiyeleri ve düzenli taramanın dökülmeyi azaltmadaki etkisi.",
    content: "Tüy dökülmesi evcil hayvan sahiplerinin en sık karşılaştığı sorunlardan biridir. Öncelikle tüy dökülmesinin tamamen engellenemeyeceğini, bunun doğal bir biyolojik süreç olduğunu bilmek gerekir. Ancak dökülmeyi minimuma indirmek mümkündür.\n\n1. Düzenli Tarama: Dökülmeyi azaltmanın en etkili yolu, ölü tüyleri düzenli olarak uzaklaştırmaktır. Kedi ve köpeklerin tüy yapısına uygun fırçalarla her gün tarama yapmak, evdeki tüyleri %80'e kadar azaltır.\n\n2. Doğru Beslenme: Kaliteli, protein değeri yüksek mamalar ve veteriner hekiminizin önerisiyle omega-3 ve omega-6 yağ asidi takviyeleri tüy köklerini güçlendirir.\n\n3. Profesyonel Kozmetik Bakım: Yılda birkaç kez yaptıracağınız profesyonel yıkama ve banyo bakımları, evcil hayvanınızın ölü alt tüylerinden tamamen arınmasını sağlar ve tüy dökülmesini ciddi derecede azaltır.",
  },
  {
    id: 2,
    title: "Kedi ve Köpeklerde Keratin Bakımının 5 Faydası",
    category: "Tüy & Deri Sağlığı",
    date: "12 Temmuz 2026",
    author: "MEB Usta Öğretici",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=800",
    summary: "Mat, yıpranmış ve kuru tüyler için profesyonel keratin bakımı nedir? Tüy yapısını nasıl güçlendirir ve deri sağlığını nasıl korur?",
    content: "Tıpkı insanlar gibi, dostlarımızın da tüy sağlığı dış etkenlerden ve beslenmeden olumsuz etkilenebilir. Keratin bakımı, dostlarımızın tüy tellerine koruyucu bir katman ekleyerek onları dış etkenlere karşı korur.\n\nİşte keratin bakımının başlıca faydaları:\n\n1. Canlılık ve Parlaklık: Yıpranmış ve matlaşmış tüylere anında parlak ve sağlıklı bir görünüm kazandırır.\n2. Kolay Tarama: Tüy tellerini pürüzsüzleştirerek kıtık oluşumunu ve keçelenmeyi engeller. Evde tarama işlemlerini çok daha kolay ve acısız hale getirir.\n3. Tüy Dökülmesinde Azalba: Kırılan ve zayıflayan tüy tellerini onararak kırılmaya bağlı tüy dökülmelerinin önüne geçer.\n4. Deri Nem Dengesi: Keratin bakımı cildin kurumasını ve kepeklenmesini önleyerek cilt sağlığını destekler.\n5. Hoş ve Kalıcı Koku: Bakım sonrasında tüyler uzun süre ferah ve hoş kokar.",
  },
  {
    id: 3,
    title: "Sedasyonsuz Pet Bakımı Neden Kritik Önem Taşır?",
    category: "Hayvan Refahı",
    date: "05 Temmuz 2026",
    author: "Vet. Teknikeri & Laborant",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800",
    summary: "Kimyasal sakinleştiricilerin evcil hayvanların kalp ve genel sağlığı üzerindeki riskleri ve sabır odaklı sedasyonsuz bakımın önemi.",
    content: "Birçok pet kuaföründe agresif veya aşırı heyecanlı hayvanları kontrol altında tutmak için sedasyon (kimyasal sakinleştirici/hafif anestezi) yöntemi tercih edilir. Ancak bu yöntem dostlarımızın sağlığı için ciddi riskler barındırır.\n\nSedasyonsuz bakımın önemini veteriner teknikeri bilinciyle açıklıyoruz:\n\n1. Organ Sağlığı Riskleri: Sakinleştirici ilaçlar özellikle yaşlı, gizli kalp hastası veya solunum problemi olan hayvanlarda ölümcül sonuçlar doğurabilir.\n2. Güvene Dayalı İletişim: Dostumuza ilaç vermek yerine sabırla yaklaşmak, onunla kuaför süreci arasında bir güven ilişkisi kurar. Sonraki randevularda dostumuz çok daha sakinleşir.\n3. Travmadan Kaçınma: İlaç etkisi altında yarı uyanık olmak hayvanlar için korkutucu bir deneyimdir. Ayık bir şekilde, sevgiyle yapılan tıraşlar psikolojik travma riskini yok eder.\n\nPatika Pet Kuaför olarak, sedasyona tamamen karşı duruyor, dostlarımızı kendi ritimlerinde, sabırla ve sevgiyle güzelleştiriyoruz.",
  },
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Admin State
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showPasscodeModal, setShowPasscodeModal] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [showAddPostModal, setShowAddPostModal] = useState(false);

  // Form State
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Köpek & Kedi Bakımı");
  const [newAuthor, setNewAuthor] = useState("Vet. Teknikeri & Laborant");
  const [newImage, setNewImage] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [newContent, setNewContent] = useState("");

  // Load custom posts from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("patika_blog_posts");
    const parsed = saved ? JSON.parse(saved) : [];
    setPosts([...DEFAULT_BLOG_POSTS, ...parsed]);
  }, []);

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "p4t1k4") {
      setIsAdminMode(true);
      setShowPasscodeModal(false);
      setPasscode("");
      toast.success("Yönetici modu başarıyla açıldı!");
    } else {
      toast.error("Hatalı şifre! Lütfen tekrar deneyin.");
    }
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newSummary || !newContent) {
      toast.error("Lütfen başlık, özet ve içerik alanlarını doldurun.");
      return;
    }

    const defaultImage = "/images/kedi_tarama/WhatsApp Image 2026-07-23 at 19.34.53.jpeg";
    const postDate = new Date().toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const newPost: BlogPost = {
      id: "custom-" + Date.now(),
      title: newTitle,
      category: newCategory,
      date: postDate,
      author: newAuthor,
      image: newImage.trim() || defaultImage,
      summary: newSummary,
      content: newContent,
      isCustom: true
    };

    const saved = localStorage.getItem("patika_blog_posts");
    const parsed = saved ? JSON.parse(saved) : [];
    const updated = [...parsed, newPost];
    
    localStorage.setItem("patika_blog_posts", JSON.stringify(updated));
    setPosts([...DEFAULT_BLOG_POSTS, ...updated]);
    
    // Reset Form
    setNewTitle("");
    setNewImage("");
    setNewSummary("");
    setNewContent("");
    setShowAddPostModal(false);
    
    toast.success("Yeni blog yazısı başarıyla eklendi!");
  };

  const handleDeletePost = (id: string | number) => {
    if (confirm("Bu blog yazısını kalıcı olarak silmek istediğinize emin misiniz?")) {
      const saved = localStorage.getItem("patika_blog_posts");
      const parsed = saved ? JSON.parse(saved) : [];
      const updated = parsed.filter((p: BlogPost) => p.id !== id);
      
      localStorage.setItem("patika_blog_posts", JSON.stringify(updated));
      setPosts([...DEFAULT_BLOG_POSTS, ...updated]);
      
      toast.success("Blog yazısı başarıyla silindi.");
    }
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">Bilgi Köşesi</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            Bilgilendirici Yazılarımız
            <button
              onClick={() => {
                if (isAdminMode) {
                  setIsAdminMode(false);
                  toast.info("Yönetici modundan çıkış yapıldı.");
                } else {
                  setShowPasscodeModal(true);
                }
              }}
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              title={isAdminMode ? "Yönetici Modunu Kapat" : "Yönetici Girişi"}
            >
              {isAdminMode ? <Unlock className="w-5 h-5 text-primary" /> : <Lock className="w-5 h-5" />}
            </button>
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            Dostlarınızın sağlığı, bakımı ve gelişimi için veteriner teknikeri gözünden hazırladığımız faydalı içerikler.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Admin "Add Post" Card */}
          {isAdminMode && (
            <Card
              onClick={() => setShowAddPostModal(true)}
              className="group bg-card/50 border-2 border-dashed border-primary/30 hover:border-primary hover:shadow-pet-lg transition-all duration-300 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 cursor-pointer h-full min-h-[350px] text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
                <Plus className="w-8 h-8" />
              </div>
              <span className="font-display font-bold text-lg text-primary">Yeni Blog Yazısı Ekle</span>
              <span className="text-muted-foreground text-xs font-sans mt-1 max-w-[200px]">
                Sitenize kalıcı olarak yeni bir makale ekleyin.
              </span>
            </Card>
          )}

          {posts.map((post) => (
            <Card
              key={post.id}
              className="group bg-card border-border hover:shadow-pet-lg hover:border-primary/20 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col h-full relative"
            >
              {/* Delete Button (Only for custom posts in admin mode) */}
              {isAdminMode && post.isCustom && (
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2.5 shadow-lg transition-colors z-10 flex items-center justify-center hover:scale-105"
                  title="Yazıyı Sil"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}

              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary/95 text-white font-medium text-xs px-3 py-1 rounded-full shadow-md">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow text-left">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-sans font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-primary" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6 flex-grow">
                  {post.summary}
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => setSelectedPost(post)}
                    variant="link"
                    className="text-primary hover:text-primary/80 font-bold p-0 flex items-center gap-1"
                  >
                    Devamını Oku
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Post Detail Modal */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative bg-card border border-border w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 md:p-8 shadow-2xl z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:bg-border"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Content */}
                <div className="text-left">
                  <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full mb-4">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 leading-tight">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6 font-sans font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary" />
                      {selectedPost.author}
                    </span>
                  </div>

                  <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed whitespace-pre-line space-y-4">
                    {selectedPost.content}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Passcode Modal */}
        <AnimatePresence>
          {showPasscodeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowPasscodeModal(false)}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-card border border-border w-full max-w-sm rounded-3xl p-6 shadow-2xl z-10"
              >
                <button
                  onClick={() => setShowPasscodeModal(false)}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3.5 h-3.5" />
                </button>

                <form onSubmit={handlePasscodeSubmit} className="text-left">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">Yönetici Girişi</h3>
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 font-sans">
                      Yönetici Şifresi
                    </label>
                    <input
                      type="password"
                      placeholder="Şifreyi girin"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                      autoFocus
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl">
                    Giriş Yap
                  </Button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Add Post Modal */}
        <AnimatePresence>
          {showAddPostModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowAddPostModal(false)}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-card border border-border w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-8 shadow-2xl z-10"
              >
                <button
                  onClick={() => setShowAddPostModal(false)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>

                <form onSubmit={handleAddPost} className="text-left font-sans">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-1">Yeni Blog Yazısı</h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Aşağıdaki bilgileri doldurarak sitenizde kalıcı olarak yeni bir yazı yayınlayın.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                        Yazı Başlığı
                      </label>
                      <input
                        type="text"
                        placeholder="Örn: Evcil Hayvanlarda Tırnak Kesimi Rehberi"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                          Kategori
                        </label>
                        <select
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
                        >
                          <option value="Köpek & Kedi Bakımı">Köpek & Kedi Bakımı</option>
                          <option value="Tüy & Deri Sağlığı">Tüy & Deri Sağlığı</option>
                          <option value="Hayvan Refahı">Hayvan Refahı</option>
                          <option value="Haberler & Duyurular">Haberler & Duyurular</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                          Yazar
                        </label>
                        <select
                          value={newAuthor}
                          onChange={(e) => setNewAuthor(e.target.value)}
                          className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
                        >
                          <option value="Vet. Teknikeri & Laborant">Vet. Teknikeri & Laborant</option>
                          <option value="MEB Usta Öğretici">MEB Usta Öğretici</option>
                          <option value="Zeynep Dilara">Zeynep Dilara</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                        Kapak Görseli Linki (Opsiyonel)
                      </label>
                      <input
                        type="text"
                        placeholder="Örn: https://images.unsplash.com/... (Boş bırakılırsa varsayılan resim eklenir)"
                        value={newImage}
                        onChange={(e) => setNewImage(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                        Yazı Özeti (Kartta Görünecek Kısım)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Yazının kısa bir özetini girin..."
                        value={newSummary}
                        onChange={(e) => setNewSummary(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                        Yazı İçeriği (Detaylı Metin)
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Yazı içeriğini detaylı olarak buraya yazın..."
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent whitespace-pre-wrap"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3 justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddPostModal(false)}
                      className="rounded-xl px-5 border-border text-foreground"
                    >
                      Vazgeç
                    </Button>
                    <Button
                      type="submit"
                      className="rounded-xl px-6 bg-primary hover:bg-primary/90 text-white font-semibold"
                    >
                      Yayınla
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Blog;
