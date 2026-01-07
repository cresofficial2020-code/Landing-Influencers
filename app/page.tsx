"use client";
import React from 'react';
import './globals.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Landing() {
  const mouseX = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 });

  return (
    <div onMouseMove={(e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); }} className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      
      {/* EFECTO DE LUZ QUE SIGUE AL MOUSE */}
      <motion.div className="pointer-events-none fixed inset-0 z-30" style={{ background: useTransform([mouseX, mouseY], ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`) }} />

      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold italic tracking-tighter">IMPERIO<span className="text-blue-500">.</span></div>
        <button className="group relative overflow-hidden bg-white text-black px-6 py-2 rounded-full font-bold transition-all">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Agendar ahora</span>
          <div className="absolute inset-0 z-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
      </nav>

      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          DOMINA EL <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">ALGORITMO</span>
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">Gestión de élite para creadores de contenido.</p>
      </section>

      <section className="px-6 py-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-blue-500 mb-2">Estrategia</h3>
          <p className="text-zinc-400 text-sm">Viralidad garantizada con análisis de retención real.</p>
        </div>
        <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-blue-500 mb-2">Edición</h3>
          <p className="text-zinc-400 text-sm">Contenido diseñado para capturar la atención en 3 segundos.</p>
        </div>
      </section>
    </div>
  );
}