import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between px-8 md:px-16 pt-28 pb-10 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bmw-video.mp4" type="video/mp4" />
        </video>
        {/* Gradients ensuring high-contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent w-full md:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Main Headline Content */}
      <div className="relative z-10 max-w-2xl my-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
          We make the <span className="text-cyan-400 italic">best</span> <br />
          version of BMW
        </h1>
        <p className="mt-6 text-sm md:text-base text-neutral-300 font-light max-w-lg leading-relaxed">
          If you dream of an exclusive car, let us turn it into a unique item. We realise your wishes to get the perfect car.
        </p>

        <div className="mt-8">
          <a
            href="#showroom"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-bold text-cyan-400 hover:text-white transition-colors"
          >
            <span>VIEW PROJECTS</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      {/* Social Links Footer Bar */}
      <div className="relative z-10 flex items-center gap-6 text-neutral-400 text-xs font-mono">
        <a href="#" className="hover:text-cyan-400 transition-colors">FB</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">TG</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">IG</a>
      </div>
    </section>
  );
}