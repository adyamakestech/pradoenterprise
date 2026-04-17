// app/layanan/page.tsx (Ganti nama folder 'perkhidmatan' menjadi 'layanan')
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Hammer, Ruler, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Layanan() {
  const kepakaran = [
    {
      title: "Pembangunan Rumah Baru",
      desc: "Kami mengelola segalanya mulai dari pekerjaan tanah, fondasi bangunan, struktur, hingga pemasangan atap dan hasil akhir (finishing). Fokus kami adalah pada kekuatan dan estetika modern.",
      icon: <Home className="w-10 h-10" />,
      ciri: ["Garansi Struktur 10 Tahun", "Denah Arsitek Gratis", "Pemantauan Proyek Harian"]
    },
    {
      title: "Renovasi",
      desc: "Apakah Anda ingin memperluas ruang dapur, menambah kamar tidur, atau mengubah fasad rumah, tim ahli kami siap membantu memberikan napas baru pada hunian Anda.",
      icon: <Hammer className="w-10 h-10" />,
      ciri: ["Integrasi Struktur Lama & Baru", "Desain Interior", "Pemasangan Keramik & Plafon"]
    },
    {
      title: "Desain & Denah 3D",
      desc: "Visualisasikan rumah impian Anda sebelum pembangunan dimulai. Kami menyediakan layanan gambar denah dan desain 3D yang realistis untuk memastikan kepuasan Anda.",
      icon: <Ruler className="w-10 h-10" />,
      ciri: ["Visualisasi Realistis", "Penataan Ruang", "Layanan Konsultasi Pakar"]
    }
  ];

  const proses = [
    { step: "01", title: "Konsultasi Awal", desc: "Diskusi mengenai anggaran, visi, dan kebutuhan lokasi Anda." },
    { step: "02", title: "Penyediaan Denah", desc: "Arsitek kami menyiapkan draf desain dan penawaran harga resmi." },
    { step: "03", title: "Pembangunan", desc: "Tim kontraktor kami memulai pekerjaan di lokasi dengan pemantauan ketat." },
    { step: "04", title: "Serah Terima Kunci", desc: "Pemeriksaan kualitas akhir sebelum kunci diserahkan kepada Anda." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Layanan */}
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Layanan Kami</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Solusi konstruksi berkualitas tinggi yang disesuaikan dengan anggaran dan kebutuhan Anda di Bintulu.
          </p>
        </div>
      </section>

      {/* Daftar Layanan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {kepakaran.map((item, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{item.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {item.ciri.map((c, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="text-amber-500 w-5 h-5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link href="/hubungi" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-4 transition-all">
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

      {/* Proses Kerja */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Cara Kami Bekerja</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Alur kerja yang transparan untuk memastikan proyek Anda selesai tepat waktu.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {proses.map((p, i) => (
              <div key={i} className="relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="text-5xl font-black text-slate-100 absolute top-4 right-4">{p.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{p.title}</h3>
                <p className="text-slate-600 relative z-10">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}