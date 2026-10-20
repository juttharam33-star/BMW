import React from 'react';

export default function Services() {
  const services = [
    {
      code: 'SRV-01',
      title: 'ECU & TCU Remapping',
      desc: 'Custom dyno calibration unlocking boost pressure, ignition timing, and rev limiter profiles calibrated specifically for premium fuel.',
    },
    {
      code: 'SRV-02',
      title: 'Titanium Exhaust Valvetronic',
      desc: 'Inconel and lightweight titanium fabrication engineered to deliver acoustic aggression with reduced backpressure.',
    },
    {
      code: 'SRV-03',
      title: 'Aerodynamic Pre-Preg Carbon',
      desc: 'Wind-tunnel tested front splitters, rear diffusers, side skirts, and swan-neck GT wings cured in high-pressure autoclaves.',
    },
    {
      code: 'SRV-04',
      title: 'Forged Monoblock Wheels',
      desc: 'Aerospace-grade 6061-T6 aluminum custom-machined to exact hub specifications, maximizing brake clearance and minimizing unsprung weight.',
    },
  ];

  return (
    <section id="services" className="relative py-28 px-8 md:px-16 bg-[#040405] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                Engineering
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Tuning <span className="text-neutral-500">Disciplines</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs md:text-sm max-w-md font-light leading-relaxed">
            From street software adjustments to full competitive track transformations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-[#090a0d] border border-neutral-800/80 hover:border-cyan-500/50 hover:bg-[#0d0e13] transition-all duration-300 group"
            >
              <span className="text-xs font-mono text-cyan-500 font-semibold tracking-wider">
                {srv.code}
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2 group-hover:text-cyan-300 transition-colors">
                {srv.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}