// app/proyek/page.tsx (Ganti nama folder 'projek' menjadi 'proyek')
"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Calendar, CheckCircle, LayoutGrid, Home, Building, Hammer, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PortofolioProyek() {
  const [filter, setFilter] = useState('Semua');

  const projekData = [
    {
      id: 1, title: "Bungalo Modern 2 Lantai", category: "Rumah Baru", location: "Tanjung Kidurong, Bintulu",
      status: "Selesai Sepenuhnya", year: "2023", desc: "Pembangunan rumah bungalo eksklusif dengan konsep 'open-space' dan sistem sirkulasi udara alami."
    },
    {
      id: 2, title: "Renovasi Dapur & Ruang Tamu", category: "Renovasi", location: "Jepak, Bintulu",
      status: "Selesai Sepenuhnya", year: "2024", desc: "Perluasan area dapur dan pemasangan kabinet modern serta lantai keramik premium."
    },
    {
      id: 3, title: "Kantor Cabang Komersial", category: "Komersial", location: "Pusat Kota Bintulu",
      status: "Sedang Berjalan", year: "2024", desc: "Proyek pembangunan struktur kantor komersial dengan standar keamanan industri."
    },
    {
      id: 4, title: "Rumah Teras 1 Lantai (Custom)", category: "Rumah Baru", location: "Kemena, Bintulu",
      status: "Selesai Sepenuhnya", year: "2023", desc: "Solusi pembangunan rumah di atas tanah kavling sendiri dengan anggaran yang kompetitif."
    },
    {
      id: 5, title: "Pembaruan Fasad & Pagar", category: "Renovasi", location: "Tatau, Sarawak",
      status: "Selesai Sepenuhnya", year: "2022", desc: "Transformasi tampilan luar rumah lama menjadi gaya kontemporer modern."
    }
  ];

  const kategori = ['Semua', 'Rumah Baru', 'Renovasi', 'Komersial'];
  const filteredProjek = filter === 'Semua' ? projekData : projekData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-20 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-sm mb-6 border border-amber-500/20">
            <LayoutGrid size={16} /> Bukti Kualitas Kerja Kami
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Portofolio Proyek</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Kumpulan hasil kerja Prado Enterprise di sekitar Bintulu dan Sarawak. Setiap proyek adalah komitmen kami terhadap keunggulan.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-200 bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3 sm:gap-6">
            {kategori.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${filter === cat ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {cat}
              </button>
            ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjek.map((projek) => (
              <div key={projek.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col">
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500 group-hover:scale-110 transition-transform duration-700">
                    {projek.category === 'Rumah Baru' ? <Home size={64} opacity={0.3} /> : projek.category === 'Renovasi' ? <Hammer size={64} opacity={0.3} /> : <Building size={64} opacity={0.3} />}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm uppercase tracking-wider">{projek.category}</div>
                  {projek.status === "Sedang Berjalan" && (
                    <div className="absolute bottom-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-lg text-xs font-bold animate-pulse">SEDANG BERJALAN</div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">{projek.title}</h3>
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-center gap-2 text-slate-600 text-sm"><MapPin size={16} className="text-amber-500" />{projek.location}</div>
                    <div className="flex items-center gap-2 text-slate-600 text-sm"><Calendar size={16} className="text-amber-500" />Tahun Selesai: {projek.year}</div>
                    <div className="flex items-center gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500" />{projek.status}</div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">"{projek.desc}"</p>
                  <button className="w-full py-3 px-4 border border-slate-200 rounded-xl text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 mt-auto">
                    Lihat Detail <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {filteredProjek.length === 0 && (
            <div className="text-center py-20"><p className="text-slate-400 text-lg">Tidak ada proyek yang ditemukan dalam kategori ini untuk saat ini.</p></div>
          )}
        </div>
      </section>

      <section className="py-20 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Ingin Proyek Anda Ada di Sini?</h2>
          <p className="text-slate-800 text-lg mb-10 max-w-xl mx-auto">Ambil langkah pertama untuk membangun rumah impian Anda bersama Prado Enterprise.</p>
          <Link href="/hubungi" className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
            Dapatkan Konsultasi Gratis
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}