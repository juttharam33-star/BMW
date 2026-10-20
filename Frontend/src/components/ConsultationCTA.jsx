import React, { useState } from 'react';

export default function ConsultationCTA() {
  const [formData, setFormData] = useState({ name: '', email: '', model: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later we will post this data to: http://localhost:5000/api/inquiries
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-8 md:px-16 bg-[#06070a] border-t border-neutral-900 overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 font-semibold">
            Custom Consultation
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mt-2 mb-6">
            Build Your <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Masterpiece
            </span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
            Tell us about your vehicle and targets. Our engineers will draft a tailored package covering ECU mapping, aero components, and drivetrain fortification.
          </p>
          <div className="space-y-3 font-mono text-xs text-neutral-400">
            <p className="flex items-center gap-2">
              <span className="text-cyan-400">LOCATION:</span> Munich • Los Angeles • Dubai
            </p>
            <p className="flex items-center gap-2">
              <span className="text-cyan-400">CONTACT:</span> tuning@power-tuning.de
            </p>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-[#0b0c10] p-8 rounded-2xl border border-neutral-800/80 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <span className="text-cyan-400 text-4xl block mb-3">&#10003;</span>
              <h3 className="text-lg font-bold text-white mb-1">Inquiry Transmitted</h3>
              <p className="text-xs text-neutral-400">A technical specialist will review your build brief shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="text-neutral-400 block mb-1 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-[#12141a] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="marcus@example.com"
                  className="w-full bg-[#12141a] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1 uppercase tracking-wider">Vehicle Model & Year</label>
                <input
                  type="text"
                  required
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  placeholder="e.g. 2024 BMW M4 G82 xDrive"
                  className="w-full bg-[#12141a] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1 uppercase tracking-wider">Project Scope</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Stage 2 ECU, downpipes, full carbon splitter..."
                  className="w-full bg-[#12141a] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-sans font-bold tracking-wider uppercase rounded-lg transition-all shadow-lg hover:shadow-cyan-500/20"
              >
                Submit Consultation Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}