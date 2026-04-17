// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
           <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-amber-500 text-white rounded-md flex items-center justify-center font-bold text-lg">P</div>
            <span className="font-bold text-xl text-white">
              Prado <span className="text-amber-500">Enterprise</span>
            </span>
          </div>
          <p className="mb-6">Perusahaan konstruksi terdepan di Bintulu yang berfokus pada kualitas, ketepatan, dan kepuasan pelanggan untuk setiap proyek perumahan.</p>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Tautan Cepat</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-amber-500 transition-colors">Beranda</Link></li>
            <li><Link href="/tentang-kami" className="hover:text-amber-500 transition-colors">Tentang Kami</Link></li>
            <li><Link href="/layanan" className="hover:text-amber-500 transition-colors">Layanan Konstruksi</Link></li>
            <li><Link href="/proyek" className="hover:text-amber-500 transition-colors">Portofolio Proyek</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Area Layanan</h4>
          <ul className="space-y-3">
            <li>Bintulu (Pusat)</li>
            <li>Tanjung Kidurong</li>
            <li>Jepak</li>
            <li>Tatau & Sebauh</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Prado Enterprise (BTU/BNR/771/2025). Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
}