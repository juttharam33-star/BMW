import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Configurator() {
  const models = [
    { id: 'm4', name: 'BMW M4 Competition (G82)', baseHp: 510, basePrice: 86000, img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200' },
    { id: 'm8', name: 'BMW M8 Gran Coupé (F93)', baseHp: 625, basePrice: 138000, img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200' },
    { id: 'm5', name: 'BMW M5 CS (F90)', baseHp: 635, basePrice: 142000, img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200' },
  ];

  const tuningStages = [
    { id: 'stock', name: 'OEM Factory Spec', addHp: 0, price: 0 },
    { id: 'stage1', name: 'Stage 1 ECU Calibration', addHp: 90, price: 2800 },
    { id: 'stage2', name: 'Stage 2 ECU + High-Flow Downpipes', addHp: 160, price: 6400 },
    { id: 'stage3', name: 'Stage 3 Full Apex (Hybrid Turbos + Methanol)', addHp: 240, price: 14200 },
  ];

  const carbonPacks = [
    { id: 'standard', name: 'Standard Exterior', price: 0 },
    { id: 'aero_pack', name: 'Front Splitter & Rear Diffuser Pack', price: 4200 },
    { id: 'full_apex', name: 'Full Dry Carbon Aerokit + Swan-Neck Wing', price: 9800 },
  ];

  const finishOptions = [
    { name: 'Frozen Deep Grey', hex: '#2b2d30' },
    { name: 'Isle of Man Green', hex: '#0f3a2c' },
    { name: 'Portimao Blue', hex: '#003a7a' },
    { name: 'Alpine White', hex: '#d9dcdf' },
  ];

  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedStage, setSelectedStage] = useState(tuningStages[1]);
  const [selectedCarbon, setSelectedCarbon] = useState(carbonPacks[0]);
  const [selectedFinish, setSelectedFinish] = useState(finishOptions[0].name);

  // Database transmission state
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  const totalHp = selectedModel.baseHp + selectedStage.addHp;
  const totalPrice = selectedModel.basePrice + selectedStage.price + selectedCarbon.price;

  // Real backend submission to Express / MongoDB
  const handleSaveBuild = async () => {
    setSaving(true);
    setSaveStatus(null);

    const payload = {
      modelName: selectedModel.name,
      tuningStage: selectedStage.name,
      carbonPack: selectedCarbon.name,
      finish: selectedFinish,
      totalHp,
      totalPrice,
    };

    try {
      const res = await fetch('https://bmw-production-5ee1.up.railway.app/api/configurations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setSaveStatus('success');
      } else {
        setSaveStatus('error');
      }
    } catch (err) {
      console.error('Connection failed:', err);
      setSaveStatus('error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#040405] text-white flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="flex-1 pt-28 pb-16 px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Specification Configurator
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Custom Build Studio
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Visualizer & Dynamic Specs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#090b10] h-[380px] group">
              <img
                src={selectedModel.img}
                alt={selectedModel.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">Selected Platform</span>
                  <h2 className="text-2xl font-black uppercase text-white mt-0.5">{selectedModel.name}</h2>
                  <span className="text-xs font-mono text-neutral-400">Finish: {selectedFinish}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-neutral-400 block uppercase">Estimated Build</span>
                  <span className="text-2xl font-black font-mono text-white">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Telemetry Metrics Card */}
            <div className="grid grid-cols-3 gap-4 p-5 rounded-xl border border-neutral-800/80 bg-[#090b10] font-mono">
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Engine Output</span>
                <span className="text-xl md:text-2xl font-black text-cyan-400 mt-1 block">{totalHp} HP</span>
                <span className="text-[10px] text-neutral-400 block mt-0.5">+{selectedStage.addHp} HP Tuned</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Chassis Aero</span>
                <span className="text-xs md:text-sm font-bold text-white mt-2 block truncate">{selectedCarbon.name}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Software Map</span>
                <span className="text-xs md:text-sm font-bold text-white mt-2 block truncate">{selectedStage.name}</span>
              </div>
            </div>
          </div>

          {/* Configuration Selector Controls */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 01. Select Model */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-2 block">
                01. Base Vehicle
              </span>
              <div className="flex flex-col gap-2">
                {models.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-mono flex justify-between items-center transition-all ${
                      selectedModel.id === m.id
                        ? 'border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'border-neutral-800 bg-[#090a0f] text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span className="font-bold">{m.name}</span>
                    <span className="text-neutral-400">${m.basePrice.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 02. Select Tuning Stage */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-2 block">
                02. Powertrain Calibration
              </span>
              <div className="flex flex-col gap-2">
                {tuningStages.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStage(s)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-mono flex justify-between items-center transition-all ${
                      selectedStage.id === s.id
                        ? 'border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'border-neutral-800 bg-[#090a0f] text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span>
                      <strong className="block font-bold">{s.name}</strong>
                      <span className="text-[10px] text-cyan-400">+{s.addHp} HP</span>
                    </span>
                    <span className="text-neutral-400">{s.price === 0 ? 'Included' : `+$${s.price.toLocaleString()}`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 03. Carbon Aerodynamics */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-2 block">
                03. Carbon Aerodynamics
              </span>
              <div className="flex flex-col gap-2">
                {carbonPacks.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCarbon(c)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-mono flex justify-between items-center transition-all ${
                      selectedCarbon.id === c.id
                        ? 'border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'border-neutral-800 bg-[#090a0f] text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span className="font-bold">{c.name}</span>
                    <span className="text-neutral-400">{c.price === 0 ? 'Included' : `+$${c.price.toLocaleString()}`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 04. Exterior Finish */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-2 block">
                04. Exterior Finish
              </span>
              <div className="flex items-center gap-3 p-3 rounded-xl border border-neutral-800 bg-[#090a0f]">
                {finishOptions.map((f) => (
                  <button
                    key={f.name}
                    title={f.name}
                    onClick={() => setSelectedFinish(f.name)}
                    style={{ backgroundColor: f.hex }}
                    className={`w-7 h-7 rounded-full border-2 transition-transform ${
                      selectedFinish === f.name ? 'border-cyan-400 scale-110 shadow-[0_0_10px_#06b6d4]' : 'border-neutral-700 hover:scale-105'
                    }`}
                  />
                ))}
                <span className="text-xs font-mono text-neutral-400 ml-2">{selectedFinish}</span>
              </div>
            </div>

            {/* Export & Save Button */}
            <div className="pt-2">
              <button
                onClick={handleSaveBuild}
                disabled={saving}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black uppercase tracking-wider text-xs transition-all shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 cursor-pointer"
              >
                {saving ? 'Transmitting To Database...' : 'Export & Save Build Specification'}
              </button>

              {saveStatus === 'success' && (
                <p className="text-center font-mono text-xs text-cyan-400 mt-3 animate-pulse">
                  ✓ Specification successfully archived to MongoDB database!
                </p>
              )}

              {saveStatus === 'error' && (
                <p className="text-center font-mono text-xs text-red-400 mt-3">
                  ⚠ Could not save to database. Check if backend is running on port 5000.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}