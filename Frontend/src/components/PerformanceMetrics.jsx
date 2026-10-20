import React from 'react';

export default function PerformanceMetrics() {
  const metrics = [
    { value: '800+', label: 'Horsepower Cap', subtext: 'Twin-turbo S58 & S63 calibrations' },
    { value: '2.6s', label: '0–100 km/h Record', subtext: 'With xDrive recalibration' },
    { value: '-65kg', label: 'Weight Reduction', subtext: 'Pre-preg autoclave carbon fibre' },
    { value: '100%', label: 'Dyno Proven', subtext: 'Individual wheel torque validation' },
  ];

  return (
    <section className="relative py-20 px-8 md:px-16 bg-[#060709] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {metrics.map((item, idx) => (
          <div key={idx} className="relative group p-6 rounded-xl bg-neutral-950/40 border border-neutral-800/60 hover:border-cyan-500/30 transition-all duration-300">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {item.value}
            </span>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-neutral-200 mt-2">
              {item.label}
            </h4>
            <p className="text-xs text-neutral-500 mt-1 font-mono">
              {item.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}