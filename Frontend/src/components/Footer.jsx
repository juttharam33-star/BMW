import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-8 md:px-16 bg-[#020203] border-t border-neutral-900 text-neutral-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-black tracking-widest text-white text-sm">POWER</span>
          <span className="font-bold tracking-[0.25em] text-neutral-400 text-xs">TUNING</span>
          <span className="text-neutral-600 ml-4 font-mono">© 2026. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Imprint</a>
          <a href="#" className="hover:text-white transition-colors">TUV Certification</a>
        </div>
      </div>
    </footer>
  );
}