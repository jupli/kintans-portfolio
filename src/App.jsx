import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Rocket, 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Cpu, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Phone,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Wallet,
  Bitcoin,
  CheckCircle2,
  Activity,
  Blocks,
  Mic,
  Languages,
  ExternalLink,
  PlayCircle,
  BookOpen,
  Settings,
  Zap,
  Layers,
  Trash2
} from 'lucide-react';

// --- Komponen Data Mock ---

const services = [
  {
    title: "Web Development",
    desc: "Website responsif, cepat, dan modern menggunakan teknologi terbaru seperti React, Next.js, dan Tailwind CSS.",
    icon: <Globe className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Blockchain & Web3",
    desc: "Pembuatan Smart Contract, DApps (Decentralized Apps), dan integrasi pembayaran Kripto (Bitcoin/ETH).",
    icon: <Blocks className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "Mobile Apps",
    desc: "Aplikasi Android dan iOS native atau cross-platform (Flutter/React Native) dengan UX yang intuitif.",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Integrasi AI & Automasi",
    desc: "Implementasi LLM, Chatbot cerdas, dan sistem wawancara otomatis berbasis Python & AI.",
    icon: <Brain className="w-8 h-8 text-emerald-400" />
  }
];

const projects = [
  {
    title: "Intelligent Garbage System",
    category: "IoT & AI Integration",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    desc: "Sistem tempat sampah pintar berbasis IoT yang mampu memilah sampah secara otomatis dan memantau kapasitas melalui dashboard real-time.",
    videoUrl: "https://youtu.be/iA9UX3jgEPQ"
  },
  {
    title: "AI Chatbot Assistant",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    desc: "Pengembangan asisten virtual cerdas yang mampu memahami konteks percakapan secara natural untuk meningkatkan engagement pengguna.",
    videoUrl: "https://youtu.be/JQFXYi1thss"
  },
  {
    title: "ERP-MBG System",
    category: "Enterprise Solution",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    desc: "Sistem Manajemen Sumber Daya Perusahaan (ERP) yang komprehensif untuk mengelola operasional bisnis secara efisien dan terintegrasi.",
    videoUrl: "https://youtu.be/ougHeD8RBTU"
  },
  {
    title: "Custom AI Services",
    category: "Python AI Expert",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    desc: "Layanan AI kustom berbasis Python. Mengubah ide-ide kompleks yang 'tidak mungkin' menjadi solusi teknologi yang nyata dan memungkinkan.",
    videoUrl: "https://youtu.be/GS1-ICqWYKU"
  },
  {
    title: "AI Interview Pro",
    category: "AI Integration & Laravel",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    desc: "Sistem wawancara otomatis multi-bahasa. Menggunakan Python untuk pemrosesan AI dan Laravel sebagai core backend.",
    videoUrl: "https://youtu.be/la77NMPo_Ow"
  },
  {
    title: "AI Learning Center",
    category: "EdTech & AI",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    desc: "Platform pembelajaran cerdas yang mengadaptasi materi berdasarkan progres siswa menggunakan algoritma machine learning.",
    videoUrl: "https://youtu.be/ip9FUYAhf3U"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = "088290097553";
  const whatsappUrl = `https://wa.me/62${phoneNumber.substring(1)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-white">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code size={20} className="text-white" />
            </div>
            Kintan's<span className="text-blue-500"> Dev</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-blue-400 transition-colors text-sm font-medium">Beranda</a>
            <a href="#services" className="hover:text-blue-400 transition-colors text-sm font-medium">Layanan</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors text-sm font-medium">Portfolio</a>
            <a href="#contact" className="px-5 py-2.5 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">Mulai Proyek</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Rocket size={14} /> Membangun Masa Depan Digital
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Solusi Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI & ERP Profesional</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Selamat datang di <span className="text-white font-semibold">Kintan's Dev</span>. Kami spesialis dalam pengembangan sistem ERP kustom dan layanan Kecerdasan Buatan (Python/Laravel) yang inovatif.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#portfolio" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2">
              Eksplorasi Portfolio <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Layanan Unggulan</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
                <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portfolio Unggulan</h2>
              <p className="text-slate-400 max-w-xl">Hasil karya Kintan's Dev: Dari sistem manajemen skala besar hingga implementasi AI revolusioner.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-800 text-xs font-bold text-slate-400">
                {projects.length} Total Proyek
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 flex flex-col h-full shadow-lg hover:shadow-blue-500/5 transition-all">
                <div className="aspect-video overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                     {project.videoUrl !== "#" ? (
                       <a 
                        href={project.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-xl hover:bg-blue-50"
                       >
                         <PlayCircle size={20} /> Tonton Demo
                       </a>
                     ) : (
                       <span className="text-white font-bold opacity-50">Coming Soon</span>
                     )}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-slate-900 border border-slate-800 ${
                      project.category.includes('AI') ? 'text-emerald-400' : 
                      project.category.includes('Web3') ? 'text-yellow-400' : 
                      project.category.includes('Enterprise') ? 'text-blue-400' : 
                      project.category.includes('IoT') ? 'text-orange-400' : 'text-slate-400'
                    }`}>
                      {project.category}
                    </span>
                    {project.videoUrl !== "#" && (
                      <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="text-slate-600 hover:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{project.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-900">
                    <span className="text-[10px] text-slate-600 font-mono">#{project.title.replace(/\s+/g, '-').toLowerCase()}</span>
                    {project.videoUrl !== "#" && (
                      <span className="text-[10px] text-blue-500 flex items-center gap-1">
                        <Zap size={10} className="fill-blue-500" /> Aktif
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Cpu size={120} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Butuh Solusi Teknologi Kustom?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">Kintan's Dev siap membantu Anda membangun sistem ERP yang efisien atau mengintegrasikan layanan AI mutakhir ke dalam bisnis Anda.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2">
                <MessageSquare size={18} /> Chat WhatsApp
              </a>
              <div className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold border border-slate-700 flex items-center gap-2">
                <Phone size={18} className="text-blue-400" /> {phoneNumber}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 font-bold text-xl text-white mb-8">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <Code size={14} />
            </div>
            Kintan's Dev
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors">
              <MessageSquare size={20} />
            </a>
            <Linkedin size={20} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
            <Instagram size={20} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
          </div>
          <p className="text-slate-500 text-xs tracking-widest uppercase mb-4 font-bold">Kintan's Dev Technology Solutions</p>
          <p className="text-slate-600 text-[10px]">&copy; 2024 Arsitek Digital. Membuat yang tidak mungkin menjadi nyata.</p>
          <p className="text-slate-700 text-[10px] mt-2">Hubungi kami: {phoneNumber}</p>
        </div>
      </footer>
    </div>
  );
}
