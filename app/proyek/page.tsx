// app/proyek/page.tsx
"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Calendar, CheckCircle, Home, Building, Hammer, ExternalLink } from 'lucide-react';

export default function PortofolioProyek() {
  const [filter, setFilter] = useState('Semua');

  const projekData = [
    { id: 1, title: "Bungalo Modern 2 Lantai", category: "Rumah Baru", location: "Tanjung Kidurong, Bintulu", status: "Selesai", year: "2023", desc: "Pembangunan rumah bungalo eksklusif." },
    { id: 2, title: "Renovasi Dapur & Ruang Tamu", category: "Renovasi", location: "Jepak, Bintulu", status: "Selesai", year: "2024", desc: "Perluasan area dapur dan kabinet modern." },
    { id: 3, title: "Kantor Cabang Komersial", category: "Komersial", location: "Pusat Kota Bintulu", status: "Sedang Berjalan", year: "2024", desc: "Proyek struktur kantor komersial." }
  ];

  const kategori = ['Semua', 'Rumah Baru', 'Renovasi', 'Komersial'];
  const filteredProjek = filter === 'Semua' ? projekData : projekData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="pt-32 pb-20 bg-slate-900 relative text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Portofolio Proyek</h1>
      </section>
      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm border-b">
        <div className="flex justify-center gap-3">
          {kategori.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2.5 rounded-full font-bold ${filter === cat ? 'bg-amber-500 text-slate-900' : 'bg-slate-100 text-slate-600'}`}>{cat}</button>
          ))}
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjek.map((projek) => (
            <div key={projek.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col">
              <div className="aspect-[4/3] bg-slate-200 relative flex items-center justify-center text-slate-500">
                {projek.category === 'Rumah Baru' ? <Home size={64} opacity={0.3} /> : projek.category === 'Renovasi' ? <Hammer size={64} opacity={0.3} /> : <Building size={64} opacity={0.3} />}
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-slate-900">{projek.category}</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{projek.title}</h3>
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex gap-2 text-slate-600 text-sm"><MapPin size={16} className="text-amber-500" />{projek.location}</div>
                  <div className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500" />{projek.status} ({projek.year})</div>
                </div>
                <button className="w-full py-3 px-4 border border-slate-200 rounded-xl font-bold flex justify-center gap-2">Lihat Detail <ExternalLink size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}