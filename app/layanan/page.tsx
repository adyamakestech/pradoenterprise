// app/layanan/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Hammer, Ruler, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Layanan() {
  const kepakaran = [
    {
      title: "Pembangunan Rumah Baru",
      desc: "Kami mengelola segalanya mulai dari pekerjaan tanah, fondasi bangunan, struktur, hingga pemasangan atap dan hasil akhir (finishing).",
      icon: <Home className="w-10 h-10" />,
      ciri: ["Garansi Struktur 10 Tahun", "Denah Arsitek Gratis", "Pemantauan Proyek Harian"]
    },
    {
      title: "Renovasi",
      desc: "Apakah Anda ingin memperluas ruang dapur, menambah kamar tidur, atau mengubah fasad rumah, tim ahli kami siap membantu.",
      icon: <Hammer className="w-10 h-10" />,
      ciri: ["Integrasi Struktur Lama & Baru", "Desain Interior", "Pemasangan Keramik & Plafon"]
    },
    {
      title: "Desain & Denah 3D",
      desc: "Visualisasikan rumah impian Anda sebelum pembangunan dimulai dengan layanan gambar denah dan desain 3D yang realistis.",
      icon: <Ruler className="w-10 h-10" />,
      ciri: ["Visualisasi Realistis", "Penataan Ruang", "Layanan Konsultasi Pakar"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 bg-slate-900 relative text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Layanan Kami</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Solusi konstruksi berkualitas tinggi di Bintulu.</p>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {kepakaran.map((item, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{item.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {item.ciri.map((c, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-amber-500 w-5 h-5" />{c}</li>
                    ))}
                  </ul>
                  <Link href="/hubungi" className="inline-flex items-center gap-2 text-amber-600 font-bold">
                    Diskusikan Proyek Ini <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="w-full lg:w-1/2 bg-slate-100 aspect-video rounded-3xl flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-300">
                  [Gambar Visual {item.title}]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}