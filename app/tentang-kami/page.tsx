// app/tentang-kami/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Shield, Users, CheckCircle } from 'lucide-react';

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
            <CheckCircle size={16} /> Kontraktor Terdaftar Resmi
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Tentang Prado Enterprise</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Membangun warisan dan kepercayaan di Bintulu sejak hari pertama kami beroperasi.
          </p>
        </div>
      </section>

      {/* Kisah Kami (Tanpa Gambar Kiri, Layout Dibuat Ke Tengah) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
            Putra Daerah Bintulu,<br />Pakar Konstruksi Anda.
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left md:text-center">
            <p>
              Prado Enterprise bermula dengan satu tujuan sederhana: menyediakan layanan konstruksi dan renovasi berkualitas tinggi yang transparan dan dapat diandalkan oleh penduduk Bintulu dan sekitarnya.
            </p>
            <p>
              Menyadari tantangan yang sering dihadapi oleh pemilik rumah—seperti proyek mangkrak, biaya tersembunyi, dan bahan berkualitas rendah—kami mendirikan perusahaan ini untuk membawa standar profesionalisme baru ke dalam industri konstruksi lokal.
            </p>
            <div className="font-semibold text-slate-800 border-l-4 md:border-l-0 md:border-t-4 border-amber-500 p-6 bg-amber-50 rounded-lg mt-8 inline-block text-left">
              "Rumah Anda adalah investasi seumur hidup. Tanggung jawab kami adalah memastikan fondasinya kokoh dan desainnya mewujudkan impian Anda."
            </div>
          </div>
        </div>
      </section>

      {/* Visi, Misi & Nilai */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Prinsip yang Membimbing Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nilaiTeras.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikasi (Hanya SSM) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-8">Terdaftar & Diakui Secara Resmi Oleh</h3>
          <div className="flex flex-wrap justify-center items-center opacity-80">
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