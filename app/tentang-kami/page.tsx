// app/tentang-kami/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Target, Shield, Users, Award, CheckCircle, HardHat, ArrowRight } from 'lucide-react';

export default function TentangKami() {
  const nilaiTeras = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integritas & Keselamatan",
      desc: "Keselamatan di lokasi proyek dan transparansi dalam penawaran harga adalah prioritas mutlak kami. Tidak ada kompromi untuk kualitas bahan."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tepat Waktu",
      desc: "Kami memahami nilai waktu Anda. Manajemen proyek yang efisien memastikan setiap rumah diserahkan sesuai jadwal yang disepakati."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fokus pada Pelanggan",
      desc: "Mulai dari sketsa pertama hingga serah terima kunci, kami memastikan komunikasi yang jelas dan berkelanjutan dengan pemilik rumah."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header Tentang Kami */}
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-sm mb-6 border border-amber-500/20">
            <Award size={16} /> Kontraktor Terdaftar CIDB
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Tentang Prado Enterprise</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Membangun warisan dan kepercayaan di Bintulu sejak hari pertama kami beroperasi.
          </p>
        </div>
      </section>

      {/* Kisah Kami */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative shadow-xl border border-slate-200 flex items-center justify-center text-slate-400">
                <div className="text-center p-8">
                  <HardHat size={80} className="mx-auto mb-4 opacity-30" />
                  <p className="font-medium text-lg">[Gambar Pendiri / Tim Prado]</p>
                </div>
              </div>
              <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden sm:block animate-in fade-in zoom-in duration-700">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-2xl">
                    10+
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Tahun</p>
                    <p className="text-slate-500 text-sm">Pengalaman Konstruksi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Putra Daerah Bintulu,<br />Pakar Konstruksi Anda.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Prado Enterprise bermula dengan satu tujuan sederhana: menyediakan layanan konstruksi dan renovasi berkualitas tinggi yang transparan dan dapat diandalkan oleh penduduk Bintulu dan sekitarnya.
                </p>
                <p>
                  Menyadari tantangan yang sering dihadapi oleh pemilik rumah—seperti proyek mangkrak, biaya tersembunyi, dan bahan berkualitas rendah—kami mendirikan perusahaan ini untuk membawa standar profesionalisme baru ke dalam industri konstruksi lokal.
                </p>
                <p className="font-semibold text-slate-800 border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 rounded-r-lg">
                  "Rumah Anda adalah investasi seumur hidup. Tanggung jawab kami adalah memastikan fondasinya kokoh dan desainnya mewujudkan impian Anda."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi, Misi & Nilai */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Prinsip yang Membimbing Kami</h2>
            <p className="text-slate-600 text-lg">Setiap paku yang dipukul dan setiap bata yang disusun dipandu oleh nilai-nilai inti perusahaan kami.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nilaiTeras.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikasi */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-8">Terdaftar & Diakui Secara Resmi Oleh</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 font-bold text-2xl text-slate-800">
                <Award className="w-10 h-10 text-slate-800" /> CIDB MALAYSIA
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 font-bold text-2xl text-slate-800">
                <Shield className="w-10 h-10 text-slate-800" /> SSM TERDAFTAR
              </div>
              <p className="font-semibold text-amber-600 tracking-wider">BTU/BNR/771/2025</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}