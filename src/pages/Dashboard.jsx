import React from 'react';
import risetkeyword from '../assets/risetkeyword.png';
import fotoNavy from '../assets/Navy.jpeg';
import fotoAraa from '../assets/Araa.jpeg';
export default function Dashboard() {
  
  // Fungsi otomatis scroll berdasarkan ID section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 1. Data Anggota Tim + Link Instagram
  const amMembers = [
    {
      id: 1,
      name: "Cindy Safa Avika Ramadhani",
      Sekolah: "SMK Negeri 12 MALANG",
      ttl: "Malang, 9 September 2008",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
      instagram: "https://www.instagram.com/apikaa.c/"
    },
    {
      id: 2,
      name: "Yuanita Navy",
      Sekolah: "SMK NEGERI 3 MALANG",
      ttl: "Malang, 28 Maret 2009",
      image: fotoNavy,
      instagram: "https://www.instagram.com/strrwberies/"
    },
    {
      id: 3,
      name: "Aura icaa",
      Sekolah: "SMK Negeri 11 MALANG",
      ttl: "Malang, 13 Maret 2009",
      image: fotoAraa,
      instagram: "https://www.instagram.com/araa_yoo13/"
    },
    {
      id: 4,
      name: "Galih",
      Sekolah: "SMK Negeri 4 BOJONEGORO",
      ttl: "Medan, 20 April 2001",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      instagram: "https://instagram.com/username4"
    },
    {
      id: 5,
      name: "Dwi",
      sekolah: "SMK NEGERI 4 BOJONEGORO",
      ttl: "Bojonegoro, 9 November 2008",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
      instagram: "https://instagram.com/username5"
    }
  ];

  // 2. Data 4 Macam Pekerjaan
  const bs = [
    { id: 1, role: "Riset Kata Kunci ", desc: "Aktivitas mengidentifikasi kata kunci yang relevan dengan tren dan kebutuhan audiens untuk digunakan sebagai dasar pembuatan artikel baru di situs wallpaperindonesia.id, teriour.com, dan oyitokgroup.com." },
    { id: 2, role: "Redesign", desc: "Upaya memperbaiki artikel-artikel lama agar sesuai dengan standar template baru yang lebih profesional, terutama pada situs wallpaperindonesia.id untuk meningkatkan kenyamanan visual pengunjung." },
    { id: 3, role: "Artikel Baru", desc: "Kegiatan menyusun konten informatif dengan topik yang beragam seperti tren wallpaper dinding, ide dekorasi interior, hingga artikel seputar softskill dan hardskill dunia kerja." },
    { id: 4, role: "Landing Page", desc: "Proses memperbarui halaman utama website yang mencakup penggantian banner promosi berkala, pembaruan informasi profil perusahaan, serta perbaikan struktur halaman yang diperlukan pada situs wallpaperindonesia.id, teriour.com, dan oyitokgroup.com." }
  ];

  // 3. Data Portofolio (Hasil Pekerjaan)
  const portfolios = [
    {
      id: 1,
      title: "Riset Keyword",
      image: risetkeyword,
    },
    {
      id: 2,
      title: "Redesign",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "Artikel Baru",
      image: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=500",
    },
    {
      id: 4,
      title: "Landing Page",
      image: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=500",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 selection:bg-blue-500 selection:text-white">
      
      {/* 1. HERO SECTION: JUDUL + PENGERTIAN TIM WEBSITE */}
      <section className="bg-white border-b border-slate-100 py-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Welcome to Our Space
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 leading-tight">
            Profil Kreatif & Profesional <br/>
            <span className="text-blue-600">Tim Pengembang Website</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
             bertugas meningkatkan kualitas website agar lebih mudah muncul di pencarian Google. Pada bagian On-Page, 
             penulis melakukan riset kata kunci (keyword) untuk membuat artikel baru yang menarik, serta melakukan redesain 
             artikel lama dan memperbaiki tampilan landing page menggunakan WordPress. Sedangkan pada bagian Off-Page, penulis 
             membantu memperkuat reputasi website dengan cara membangun backlink melalui pemberian komentar yang relevan di situs-situs lain.
             </p>
          
          {/* 2. BUTTON UNTUK MELIHAT BIODATA */}
          <button 
            onClick={() => scrollToSection('members-section')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Lihat Biodata Anggota Tim
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* 3. SECTION BIODATA 5 ANGGOTA */}
      <section id="members-section" className="container mx-auto px-4 pt-24 scroll-mt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Biodata Anggota Tim</h2>
          <p className="text-slate-500 mt-2">Para profesional di balik pembuatan projek website ini</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {amMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-28 h-28 rounded-full mx-auto object-cover mb-5 ring-4 ring-blue-50 shadow-inner"
                />
                <h3 className="font-bold text-xl text-slate-800 mb-1">{member.name}</h3>
                <p className="text-xs font-medium text-slate-500 mb-2">{member.Sekolah}</p>
                <p className="text-blue-600 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-xs text-slate-400 bg-slate-50 py-2 rounded-lg mb-5 px-2">{member.ttl}</p>
              </div>

              {/* BUTTON INSTAGRAM DI BAWAH MASING-MASING ANGGOTA */}
              <a 
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-medium py-2 rounded-xl text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Instagram
              </a>
            </div>
          ))}
        </div>

        {/* 4. BUTTON PEKERJAAN KAMI */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => scrollToSection('tasks-section')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all duration-300 inline-flex items-center gap-2"
          >
            Lihat Pekerjaan Kami
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* 5. SECTION 4 MACAM PEKERJAAN KAMI */}
      <section id="tasks-section" className="container mx-auto px-4 pt-24 scroll-mt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">4 Macam Pekerjaan Kami</h2>
          <p className="text-slate-500 mt-2">Spesialisasi dan fokus utama tanggung jawab tim kami</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bs.map((task) => (
            <div key={task.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-blue-500 flex gap-4 items-start">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 font-bold text-lg">
                0{task.id}
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{task.role}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{task.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 6. BUTTON UNTUK PORTOFOLIO */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => scrollToSection('portfolio-section')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all duration-300 inline-flex items-center gap-2"
          >
            Buka Portofolio Tim
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* 7. SECTION HASIL PORTOFOLIO */}
      <section id="portfolio-section" className="container mx-auto px-4 pt-24 scroll-mt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Hasil Portofolio</h2>
          <p className="text-slate-500 mt-2">Karya nyata berkualitas tinggi yang berhasil kami rampungkan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolios.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}