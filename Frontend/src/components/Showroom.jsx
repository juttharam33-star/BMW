import React from 'react';

export default function Showroom() {
  const models = [
    {
      id: '01',
      name: 'BMW M4 Competition',
      stage: 'STAGE 3 APEX',
      hp: '720 HP',
      torque: '850 Nm',
      acceleration: '2.8s 0-100',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: '02',
      name: 'BMW M8 Gran Coupé',
      stage: 'AERODYNAMIC CARBON',
      hp: '800 HP',
      torque: '1,000 Nm',
      acceleration: '2.6s 0-100',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: '03',
      name: 'BMW M5 CS Shadow',
      stage: 'TRACK EDITION',
      hp: '635 HP',
      torque: '750 Nm',
      acceleration: '3.0s 0-100',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  return (
    <section id="showroom" className="relative py-28 px-8 md:px-16 bg-[#040405] text-white border-t border-neutral-900/80 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Bespoke Builds
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Latest <span className="bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>
        
        <p className="text-neutral-400 text-xs md:text-sm max-w-md font-light leading-relaxed">
          Engineered without compromise. Each build combines lightweight dry carbon construction, bespoke ECU calibration, and hand-finished cabin architecture.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((car) => (
          <div 
            key={car.id} 
            className="group relative flex flex-col justify-between bg-[#0b0c0e] rounded-xl overflow-hidden border border-neutral-800/80 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)]"
          >
            {/* Image Header with Index Tag */}
            <div className="relative h-64 overflow-hidden bg-neutral-950">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/30" />
              
              {/* Build ID badge */}
              <span className="absolute top-4 right-4 font-mono text-xs font-semibold px-2.5 py-1 bg-black/60 backdrop-blur-md rounded border border-neutral-800 text-neutral-300">
                #{car.id}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase font-medium">
                  {car.stage}
                </span>
                <h3 className="text-xl font-bold text-neutral-100 mt-1 mb-4 group-hover:text-white transition-colors">
                  {car.name}
                </h3>

                {/* Tech Spec Chips */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-neutral-800/80 mb-6">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono uppercase text-neutral-500 tracking-wider">Power</span>
                    <span className="text-xs font-bold text-neutral-200 mt-0.5">{car.hp}</span>
                  </div>
                  <div className="flex flex-col border-x border-neutral-800/80 px-2">
                    <span className="text-[9px] font-mono uppercase text-neutral-500 tracking-wider">Torque</span>
                    <span className="text-xs font-bold text-neutral-200 mt-0.5">{car.torque}</span>
                  </div>
                  <div className="flex flex-col pl-2">
                    <span className="text-[9px] font-mono uppercase text-neutral-500 tracking-wider">Sprint</span>
                    <span className="text-xs font-bold text-cyan-400 mt-0.5">{car.acceleration}</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <button className="w-full py-3 px-4 rounded-lg bg-neutral-900/60 hover:bg-cyan-500 hover:text-black text-neutral-300 hover:font-bold border border-neutral-800 hover:border-cyan-400 transition-all duration-300 flex items-center justify-between text-xs tracking-wider uppercase font-semibold">
                <span>View Full Specifications</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}