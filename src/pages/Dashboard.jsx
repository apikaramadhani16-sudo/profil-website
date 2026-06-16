import React from 'react';

function Dashboard() {
  const teamMembers = [
    { id: 1, name: "Cindy Safa A.R.", role: "Project Manager", ttl: "Jakarta, 12 Agustus 2006", skills: "Agile Management, Public Speaking, Strategic Planning" },
    { id: 2, name: "Anggota Kedua", role: "UI/UX Designer", ttl: "Bandung, 5 Mei 2006", skills: "Figma, Wireframing, User Research" },
    { id: 3, name: "Anggota Ketiga", role: "Frontend Developer", ttl: "Surabaya, 20 Januari 2005", skills: "React.js, Tailwind CSS, JavaScript (ES6)" },
    { id: 4, name: "Anggota Keempat", role: "Backend Developer", ttl: "Medan, 14 November 2005", skills: "Node.js, RESTful API, PostgreSQL" },
    { id: 5, name: "Anggota Kelima", role: "QA Engineer", ttl: "Semarang, 3 Maret 2006", skills: "Automation Testing, Cypress, Quality Assurance" }
  ];

  const jobs = [
    { title: "Project Manager", desc: "Mengelola ruang lingkup proyek, timeline, alokasi sumber daya, dan memastikan pencapaian milestone tim berjalan sesuai standar." },
    { title: "UI/UX Designer", desc: "Bertanggung jawab atas riset pengguna, pembuatan arsitektur informasi, wireframing, hingga desain high-fidelity visual interface." },
    { title: "Frontend Developer", desc: "Mengimplementasikan desain visual menjadi komponen kode aplikasi yang interaktif, responsif, dan optimal dari sisi performa." },
    { title: "Backend Developer", desc: "Membangun arsitektur server, manajemen database, integrasi API, serta memastikan keamanan tingkat tinggi pada sistem." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* HEADER UTAMA */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-wider text-blue-900">TECH OPTIMIZATION</span>
            <span className="bg-blue-50 text-blue-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-blue-200">Corporate</span>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 bg-white px-4 py-2 rounded-lg shadow-sm transition"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* WRAPPER KONTEN */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* MENU SAMPING BARU (Lebih Mudah Di-klik Tanpa Hilang) */}
        <aside className="lg:col-span-1">
          <div className="bg-white border border-slate-200 rounded-xl p-4 sticky top-24 shadow-sm space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Navigasi Halaman</p>
            <a href="#overview" className="block text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 px-3 py-2 rounded-lg transition">📌 Ringkasan Tim</a>
            <a href="#tugas" className="block text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 px-3 py-2 rounded-lg transition">💼 Struktur Kerja</a>
            <a href="#direktori" className="block text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 px-3 py-2 rounded-lg transition">👥 Direktori Anggota</a>
          </div>
        </aside>

        {/* AREA UTAMA */}
        <main className="lg:col-span-3 space-y-12">
          
          {/* SECTION 1: RINGKASAN */}
          <section id="overview" className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Ringkasan Tim Website Optimization</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tim Pengembangan dan Optimasi Website merupakan unit kerja kolaboratif yang terstruktur untuk merancang, membangun, mendistribusikan, serta memelihara platform digital. Melalui pendekatan berbasis data, tim ini berfokus pada peningkatan performa kecepatan akses, efisiensi kode, keamanan sistem, serta penyediaan pengalaman pengguna yang optimal.
            </p>
          </section>

          {/* SECTION 2: STRUKTUR TUGAS */}
          <section id="tugas" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 px-1">Fungsi Kerja dan Tanggung Jawab</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold text-blue-900 text-sm uppercase tracking-wide mb-2">{idx + 1}. {job.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: DIREKTORI ANGGOTA (Bentuk Tabel Data Formal) */}
          <section id="direktori" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 px-1">Direktori Anggota Kelompok</h2>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                    <th className="py-3.5 px-4">Nama Lengkap</th>
                    <th className="py-3.5 px-4">Spesialisasi</th>
                    <th className="py-3.5 px-4">Tempat, Tanggal Lahir</th>
                    <th className="py-3.5 px-4">Kompetensi Utama</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-slate-100 text-slate-600">
                  {teamMembers.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-4 px-4 font-semibold text-slate-900">{m.name}</td>
                      <td className="py-4 px-4">
                        <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded text-[11px] font-medium">
                          {m.role}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-500">{m.ttl}</td>
                      <td className="py-4 px-4 font-mono text-slate-500 text-[11px]">{m.skills}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-400 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <p>© 2026 Tech Optimization Department. Dokumentasi Proyek Resmi.</p>
        </div>
      </footer>

    </div>
  );
}

export default Dashboard;