// app/hubungi/page.tsx
"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Building } from 'lucide-react';

export default function HubungiKami() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const nomborTelefon = "+60128450690"; 
  const nomborPaparan = "+60 12-845 0690";

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-sm mb-6 border border-amber-500/20">
            <MessageCircle size={16} /> Siap Membantu Anda
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Mari Diskusikan Proyek Anda</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Apakah Anda memiliki pertanyaan, membutuhkan estimasi harga, atau ingin mengatur kunjungan lokasi, tim kami siap membantu.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            
            <div className="w-full lg:w-2/5 bg-slate-900 text-white p-10 sm:p-12 relative overflow-hidden">
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
              <div className="absolute top-10 right-10 opacity-10"><Building size={120} /></div>

              <h2 className="text-3xl font-bold mb-8 relative z-10">Informasi Kontak</h2>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><Phone className="text-amber-500" /></div>
                  <div>
                    <h3 className="font-semibold text-slate-300 text-sm mb-1">Telepon / WhatsApp</h3>
                    <p className="text-xl font-medium mb-3">{nomborPaparan}</p>
                    <div className="flex gap-3 text-sm font-semibold">
                      <a href={`tel:${nomborTelefon}`} className="text-amber-400 hover:text-amber-300 transition-colors">Telepon</a>
                      <span className="text-slate-600">|</span>
                      <a href={`https://wa.me/60128450690`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">WhatsApp</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><Mail className="text-amber-500" /></div>
                  <div>
                    <h3 className="font-semibold text-slate-300 text-sm mb-1">Email</h3>
                    <a href="mailto:info@pradoenterprise.com" className="text-lg font-medium hover:text-amber-400 transition-colors">info@pradoenterprise.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><MapPin className="text-amber-500" /></div>
                  <div>
                    <h3 className="font-semibold text-slate-300 text-sm mb-1">Lokasi Kantor</h3>
                    <p className="text-lg font-medium leading-relaxed text-slate-200">
                      Lantai Dasar, Lot 940, Blok 31,<br />
                      Kemena Land District, Jalan Tanjung Batu,<br />
                      97000 Bintulu, Sarawak
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><Clock className="text-amber-500" /></div>
                  <div>
                    <h3 className="font-semibold text-slate-300 text-sm mb-1">Jam Operasional</h3>
                    <p className="text-lg font-medium text-slate-200">Senin - Sabtu</p>
                    <p className="text-slate-400 text-sm">08:00 Pagi - 17:00 Sore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5 p-10 sm:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan kepada Kami</h2>
              {isSuccess && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0"><Send size={16} /></div>
                  <p className="font-medium">Terima kasih! Pesan Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                    <input type="text" id="nama" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="Masukkan nama Anda" />
                  </div>
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-semibold text-slate-700 mb-2">Nomor Telepon</label>
                    <input type="tel" id="telefon" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="+60 1x-xxx xxxx" />
                  </div>
                </div>
                <div>
                  <label htmlFor="perkhidmatan" className="block text-sm font-semibold text-slate-700 mb-2">Layanan yang Dibutuhkan</label>
                  <select id="perkhidmatan" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition-all appearance-none">
                    <option value="" disabled selected>Silakan pilih layanan...</option>
                    <option value="bina-baru">Pembangunan Rumah Baru</option>
                    <option value="ubah-suai">Renovasi</option>
                    <option value="reka-bentuk">Desain Interior / 3D</option>
                    <option value="komersial">Proyek Komersial</option>
                    <option value="lain-lain">Lain-lain</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mesej" className="block text-sm font-semibold text-slate-700 mb-2">Pesan / Detail Proyek</label>
                  <textarea id="mesej" rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none" placeholder="Ceritakan sedikit tentang anggaran, ukuran tanah, atau visi proyek Anda..."></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className={`w-full text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-amber-500/20 ${isSubmitting ? 'bg-amber-300 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-400 hover:-translate-y-1'}`}>
                  {isSubmitting ? 'Mengirim...' : (<>Kirim Pesan <Send size={20} /></>)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}