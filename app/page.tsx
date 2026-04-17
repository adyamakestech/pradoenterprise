// app/page.tsx (Laman Utama/Beranda)
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Hammer, Home as HomeIcon, MapPin, CheckCircle, ArrowRight, HardHat, Ruler, Building, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0 bg-slate-900 overflow-hidden">
           <div className="absolute inset-0 opacity-20" 
                style={{ backgroundImage: 'radial-gradient(#f59e0b 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
           </div>
           <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/95 to-slate-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-sm mb-8 border border-amber-500/20 shadow-inner">
              <MapPin size={16} className="animate-pulse" /> 
              <span>Pakar Konstruksi Bintulu, Sarawak</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Membangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Rumah Impian</span><br/>Satu Bata Pada Satu Waktu
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              Prado Enterprise adalah mitra terpercaya Anda untuk konstruksi perumahan modern, renovasi elit, dan desain bangunan komersial di seluruh Bintulu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="/hubungi" className="group bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:-translate-y-1">
                Dapatkan Estimasi Harga <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/proyek" className="group bg-white/5 backdrop-blur-sm text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1">
                Lihat Portofolio <Building size={20} className="opacity-70" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            { icon: <CheckCircle size={32} />, title: "10+ Tahun", desc: "Pengalaman Industri" },
            { icon: <HomeIcon size={32} />, title: "50+ Proyek", desc: "Berhasil Diselesaikan" },
            { icon: <HardHat size={32} />, title: "100% Lokal", desc: "Pekerja Ahli Sarawak" }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 hover:-translate-y-2 transition-all duration-300 flex items-center gap-5">
              <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                {stat.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-2xl text-slate-800">{stat.title}</h3>
                <p className="text-slate-500 font-medium">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ringkasan Tentang Kami */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-400">
                   <p>[Ruang Gambar Pekerja/Lokasi]</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-4">Tentang Kami</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Membangun Fondasi Masa Depan Keluarga
              </h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Prado Enterprise bukan sekadar kontraktor biasa. Kami berkomitmen mewujudkan rumah idaman Anda dengan standar keamanan dan kualitas tertinggi.
              </p>
              
              <Link href="/tentang-kami" className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold px-8 py-3.5 rounded-lg hover:bg-slate-900 hover:text-white transition-all mt-6">
                Pelajari Sejarah Kami <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ringkasan Layanan */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-4">Keahlian Kami</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Layanan Konstruksi Terpadu</h3>
            </div>
            <Link href="/layanan" className="hidden sm:inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700">
              Lihat Semua Layanan <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <HomeIcon size={36} />, title: "Rumah Baru", desc: "Dari denah lantai hingga penyerahan kunci sesuai dengan spesifikasi yang tepat." },
              { icon: <Hammer size={36} />, title: "Renovasi", desc: "Tingkatkan ruang tamu, dapur, atau tambah kamar dengan hasil akhir modern." },
              { icon: <Ruler size={36} />, title: "Desain Interior", desc: "Layanan desain 3D dan tata letak ruang untuk memastikan rumah tampak indah." }
            ].map((srv, i) => (
              <Link href="/layanan" key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all group flex flex-col hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm text-amber-500 mb-6 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{srv.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{srv.desc}</p>
                <div className="text-slate-900 font-semibold flex items-center gap-2 group-hover:text-amber-600">
                  Info Lebih Lanjut <ChevronRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}