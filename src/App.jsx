import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const tracks = [
    {
      name: 'Factory',
      color: 'from-green-500 to-green-600',
      desc: 'Fokus pada proses produksi, continuous improvement, dan kontrol kualitas untuk menjaga standar kelas dunia.',
      tags: ['Quality', 'Lean', 'Safety'],
      image: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYWN0b3J5fGVufDB8MHx8fDE3NjMwOTMxMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Marketing',
      color: 'from-purple-500 to-purple-600',
      desc: 'Mendalami riset pasar, brand strategy, hingga eksekusi campaign kreatif yang berdampak.',
      tags: ['Research', 'Branding', 'Campaign'],
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'Sales',
      color: 'from-red-500 to-orange-500',
      desc: 'Menguatkan kemampuan distribusi, channel management, dan negosiasi untuk mendorong pertumbuhan.',
      tags: ['Distribution', 'Negotiation', 'Growth'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop'
    }
  ]

  const testimonials = [
    {
      name: 'Nathasya Femi',
      role: 'Sales ALPHA',
      quote: 'Pembelajaran paling berarti datang dari proyek lapangan nyata. Mentornya hands-on banget!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Vania Safira',
      role: 'Marketing ALPHA',
      quote: 'Dari riset sampai eksekusi campaign, aku dapat end-to-end exposure dan kepercayaan besar.',
      avatar: 'https://images.unsplash.com/photo-1544005316-04ce1f3b9531?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Nur Rofum',
      role: 'Factory ALPHA',
      quote: 'Rotasi lintas departemen bikin pemahaman proses produksi jadi komprehensif dan aplikatif.',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section with Spline cover */}
      <section className="relative h-[88vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient overlays and shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/40 to-red-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-green-500/30 to-orange-500/30 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,rgba(0,0,0,0.55)_80%)]" />
        </div>
        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              <span className="text-white/80">ALPHA • Factory • Marketing • Sales</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Program ALPHA Acceleration Leadership Path
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
              Program percepatan kepemimpinan untuk fresh graduate Wismilak.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://karir.wismilak.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-red-500 via-orange-500 to-red-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Daftar Sekarang
              </a>
              <a href="#about" className="text-white/80 hover:text-white">Pelajari Program</a>
            </div>
          </div>
        </div>
      </section>

      {/* About ALPHA */}
      <section id="about" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="mx-auto h-full max-w-7xl">
            <div className="h-full border-t border-white/10" />
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold sm:text-4xl">Apa itu ALPHA?</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              ALPHA adalah program pengembangan kepemimpinan Wismilak yang memberikan pengalaman nyata,
              pendampingan intensif, serta jalur karier yang dipercepat bagi fresh graduate berpotensi.
              Kamu akan terlibat langsung dalam proyek-proyek strategis dan rotasi lintas fungsi.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { t: 'Pengalaman nyata di unit bisnis' },
                { t: 'Proyek lapangan berdampak' },
                { t: 'Mentorship senior leaders' },
                { t: 'Percepatan jenjang karier' },
              ].map((i, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-green-400 to-purple-400" />
                  <span className="text-white/80">{i.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop"
                alt="Kegiatan peserta ALPHA"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 md:pb-24">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold sm:text-4xl">Tiga Jalur ALPHA</h3>
            <p className="mt-2 text-white/70">Pilih jalur yang paling sesuai dengan passion dan kekuatanmu.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <div key={track.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-40 w-full overflow-hidden">
                <img src={track.image} alt={track.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-r ${track.color} opacity-60`} />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
                  {track.name === 'Factory' && <span className="h-2.5 w-2.5 rounded-full bg-green-400" />}
                  {track.name === 'Marketing' && <span className="h-2.5 w-2.5 rounded-full bg-purple-400" />}
                  {track.name === 'Sales' && <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-red-400 to-orange-400" />}
                  <span>{track.name}</span>
                </div>
                <p className="mt-3 text-white/80">{track.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {track.tags.map((tg) => (
                    <span key={tg} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80">{tg}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 md:pb-24">
        <div className="mb-10">
          <h3 className="text-3xl font-bold sm:text-4xl">Apa Kata Peserta</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-white/70">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join */}
      <section id="why" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 md:pb-24">
        <div className="mb-8">
          <h3 className="text-3xl font-bold sm:text-4xl">Kenapa ikut ALPHA?</h3>
          <p className="mt-2 text-white/70">Bangun pondasi kepemimpinan sejak awal kariermu.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Pengalaman Nyata', color: 'from-green-500 to-green-600', desc: 'Terjun langsung ke proyek strategis dan aktivitas bisnis inti.' },
            { title: 'Proyek Lapangan', color: 'from-red-500 to-orange-500', desc: 'Memimpin inisiatif yang berdampak pada kinerja tim dan bisnis.' },
            { title: 'Mentorship Senior', color: 'from-purple-500 to-purple-600', desc: 'Pendampingan intensif dari leaders berpengalaman.' },
            { title: 'Percepatan Karier', color: 'from-orange-500 to-red-500', desc: 'Jalur percepatan yang jelas dan terukur untuk top talents.' },
          ].map((c) => (
            <div key={c.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-30 blur-2xl`} />
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
                <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${c.color}`} />
                <span>{c.title}</span>
              </div>
              <p className="mt-4 text-white/80">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-purple-600 to-orange-500 opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 md:py-20">
          <h3 className="text-3xl font-extrabold sm:text-4xl">
            Saatnya kamu jadi bagian dari generasi pemimpin Wismilak berikutnya.
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-white/90">
            Daftar di karir.wismilak.com
          </p>
          <div className="mt-8">
            <a
              href="https://karir.wismilak.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-neutral-900 shadow-lg transition hover:opacity-90"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-white/60 sm:px-8">
        © {new Date().getFullYear()} Wismilak • Program ALPHA
      </footer>
    </div>
  )
}

export default App
