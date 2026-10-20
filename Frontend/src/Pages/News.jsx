import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'TRACK RECORD', 'ENGINEERING', 'RELEASES', 'BESPOKE BUILDS'];

  // Verified, authentic BMW M builds
  const featuredArticle = {
    category: 'TRACK RECORD',
    tag: 'OFFICIAL RECORD',
    date: 'OCTOBER 2026',
    title: 'Power Tuning G82 M4 Competition Breaks 6:58 Sub-7 Nürburgring Lap',
    desc: 'Equipped with our Stage 3 hybrid ball-bearing twin-turbos and titanium valved exhaust, our development chassis set the fastest verified privateer lap time at the Nordschleife.',
    img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=85&w=1600',
    stats: [
      { label: 'POWER', val: '850 HP' },
      { label: 'TOP SPEED', val: '334 KM/H' },
      { label: 'DOWNFORCE', val: '+240 KG' },
    ]
  };

  const articles = [
    {
      id: 1,
      category: 'ENGINEERING',
      date: 'OCT 14, 2026',
      readTime: '4 MIN READ',
      title: 'S58 Dyno Optimization: Safely Delivering 920 Nm of Linear Torque',
      summary: 'A technical review of closed-loop ignition mapping, knock detection safeguards, and twin-turbo boost curve linearisation.',
      img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
      badge: 'DYNO BENCHMARK'
    },
    {
      id: 2,
      category: 'RELEASES',
      date: 'OCT 02, 2026',
      readTime: '3 MIN READ',
      title: 'Aerodynamic Pre-Preg Dry Carbon Aerokit for BMW M8 Gran Coupé',
      summary: 'Wind-tunnel tested carbon splitters, side blades, and functional rear diffusers engineered to reduce underbody turbulence.',
      img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000',
      badge: 'CARBON COMPOSITE'
    },
    {
      id: 3,
      category: 'BESPOKE BUILDS',
      date: 'SEP 24, 2026',
      readTime: '5 MIN READ',
      title: 'Alcantara & Carbon Cockpit Refinement for M4 CS Track Edition',
      summary: 'Hand-stitched steering wheel with integrated shift LEDs, lightweight carbon bucket seats, and telemetry dash integration.',
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
      badge: 'CABIN ARCHITECTURE'
    },
    {
      id: 4,
      category: 'ENGINEERING',
      date: 'SEP 11, 2026',
      readTime: '3 MIN READ',
      title: 'Titanium Inconel Valvetronic Exhaust Systems Now in Production',
      summary: 'Dropping 16.8 kg over factory stainless steel while providing an aggressive, resonant straight-six acoustic profile.',
      img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000',
      badge: 'ACOUSTIC LAB'
    },
  ];

  const filtered = activeCategory === 'ALL'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  // Procedural sparkles array
  const sparkles = [
    { top: '15%', left: '10%', delay: '0s', size: 'w-1.5 h-1.5' },
    { top: '25%', left: '85%', delay: '1.2s', size: 'w-2 h-2' },
    { top: '45%', left: '4%', delay: '0.6s', size: 'w-1 h-1' },
    { top: '65%', left: '92%', delay: '2s', size: 'w-2 h-2' },
    { top: '80%', left: '18%', delay: '1.5s', size: 'w-1.5 h-1.5' },
    { top: '90%', left: '78%', delay: '0.8s', size: 'w-1 h-1' },
  ];

  return (
    <div className="relative min-h-screen bg-[#040405] text-white flex flex-col font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
      {/* Sparkles & Ambient Cyber Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      {sparkles.map((sp, idx) => (
        <span
          key={idx}
          style={{ top: sp.top, left: sp.left, animationDelay: sp.delay }}
          className={`absolute ${sp.size} bg-cyan-300 rounded-full shadow-[0_0_12px_#22d3ee] animate-pulse pointer-events-none opacity-70`}
        />
      ))}

      <Navbar />

      <main className="relative z-10 flex-1 pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Header Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Telemetry & Engineering Dispatches
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            Power <span className="bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent">Chronicles</span>
          </h1>
        </div>

        {/* Featured Story Spotlight */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-[#090a0f] mb-14 shadow-2xl group hover:border-cyan-500/40 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
            {/* Visual */}
            <div className="lg:col-span-7 relative overflow-hidden min-h-[280px]">
              <img
                src={featuredArticle.img}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#090a0f]/60 to-[#090a0f]" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-cyan-400 text-black text-[10px] font-black tracking-widest uppercase rounded">
                  {featuredArticle.tag}
                </span>
                <span className="px-3 py-1 bg-black/70 backdrop-blur border border-neutral-700 text-cyan-300 text-[10px] font-mono tracking-widest uppercase rounded">
                  {featuredArticle.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-neutral-400 mb-2 block">{featuredArticle.date}</span>
                <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight mb-4 group-hover:text-cyan-300 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {featuredArticle.desc}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-neutral-800/80 mt-6 font-mono">
                {featuredArticle.stats.map((s, idx) => (
                  <div key={idx}>
                    <span className="block text-[9px] uppercase text-neutral-500">{s.label}</span>
                    <span className="text-base font-black text-cyan-400 mt-0.5 block">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800/80 pb-5 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all ${
                    active
                      ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="font-mono text-xs text-neutral-500">
            SHOWING {filtered.length} DISPATCHES
          </span>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group bg-[#090a0f] border border-neutral-800/80 hover:border-cyan-500/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-neutral-950">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-black/20" />
                  <span className="absolute top-3 left-3 text-[9px] font-mono tracking-widest px-2 py-0.5 bg-black/80 backdrop-blur rounded text-cyan-300 border border-neutral-800 uppercase">
                    {item.badge}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 mb-2">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-100 group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 mt-3 border-t border-neutral-900 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400 group-hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1">
                  Read Article &rarr;
                </span>
                <span className="text-[9px] font-mono text-neutral-600">BMW M</span>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}